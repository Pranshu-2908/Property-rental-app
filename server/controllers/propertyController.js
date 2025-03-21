const multer = require('multer');
const Property = require('../models/propertyModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/properties'); // Save images in public/img/properties
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `property-${Date.now()}.${ext}`);
  }
});

// Multer File Filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

// Multer Upload Middleware
const upload = multer({
  storage,
  fileFilter
});

// Middleware for Uploading Multiple Images
exports.uploadPropertyImages = upload.array('images', 5); // Max 5 images

// 1️) Create a new property with images
exports.createProperty = catchAsync(async (req, res, next) => {
  if (req.files) {
    req.body.images = req.files.map(file => file.filename);
  }

  const property = await Property.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      property
    }
  });
});

// 2️) Get all properties (including images)
exports.getAllProperties = catchAsync(async (req, res, next) => {
  const properties = await Property.find();

  res.status(200).json({
    status: 'success',
    results: properties.length,
    data: {
      properties
    }
  });
});

// 3️) Get a single property
exports.getProperty = catchAsync(async (req, res, next) => {
  const property = await Property.findById(req.params.id)
    .populate('landlord', 'name email')
    .populate('tenant', 'name email');

  if (!property) {
    return next(new AppError('No property found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      property
    }
  });
});

// 4️) Update property (including image updates)
exports.updateProperty = catchAsync(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (req.files && req.files.length > 0) {
    // If new images are uploaded, update with new images
    const imagePaths = req.files.map(
      file => `public/img/properties/${file.filename}`
    );
    req.body.images = imagePaths;
  } else {
    // If no new images, retain the existing images
    req.body.images = property.images;
  }
  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!property) {
    return next(new AppError('No property found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      property
    }
  });
});

// 5️) Delete a property
exports.deleteProperty = catchAsync(async (req, res, next) => {
  const property = await Property.findByIdAndDelete(req.params.id);

  if (!property) {
    return next(new AppError('No property found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.getRentedProperties = catchAsync(async (req, res, next) => {
  const tenantId = req.user.id; // Get logged-in user's ID

  const properties = await Property.find({ tenant: tenantId });

  if (!properties.length) {
    return next(
      new AppError('No rented properties found for this tenant', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    results: properties.length,
    data: {
      properties
    }
  });
});

exports.getOwnedProperties = catchAsync(async (req, res, next) => {
  const landlordId = req.user.id; // Get logged-in user's ID

  const properties = await Property.find({ landlord: landlordId });

  if (!properties.length) {
    return next(new AppError('No properties found for this landlord', 404));
  }

  res.status(200).json({
    status: 'success',
    results: properties.length,
    data: {
      properties
    }
  });
});
