const Tenancy = require('../models/tenancyModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// 1) Create a new Tenancy (Lease Agreement)
exports.createTenancy = catchAsync(async (req, res, next) => {
  const tenancy = await Tenancy.create(req.body);

  res.status(201).json({
    status: 'success',
    data: tenancy
  });
});

// 2) Get all Tenancies
// exports.getAllTenancies = catchAsync(async (req, res, next) => {
//   const tenancies = await Tenancy.find()
//     .populate('property', 'title price location')
//     .populate('tenant', 'name email')
//     .populate('landlord', 'name email');

//   res.status(200).json({
//     status: 'success',
//     results: tenancies.length,
//     data: {
//       tenancies
//     }
//   });
// });

// 3) Get a single Tenancy by ID
exports.getTenancy = catchAsync(async (req, res, next) => {
  const tenancy = await Tenancy.findById(req.params.id)
    .populate('property', 'title price location')
    .populate('tenant', 'name email')
    .populate('landlord', 'name email');

  if (!tenancy) {
    return next(new AppError('No tenancy found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      tenancy
    }
  });
});

// 4) Update a Tenancy (e.g., extend lease, change status)
exports.updateTenancy = catchAsync(async (req, res, next) => {
  const tenancy = await Tenancy.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!tenancy) {
    return next(new AppError('No tenancy found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      tenancy
    }
  });
});

// 5) Delete a Tenancy (if required)
exports.deleteTenancy = catchAsync(async (req, res, next) => {
  const tenancy = await Tenancy.findByIdAndDelete(req.params.id);

  if (!tenancy) {
    return next(new AppError('No tenancy found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
