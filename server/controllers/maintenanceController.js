const Maintenance = require('../models/maintenanceModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// 1) Create a Maintenance Request (Tenant Only)
exports.createMaintenanceRequest = catchAsync(async (req, res, next) => {
  const { property, description } = req.body;

  const newRequest = await Maintenance.create({
    property,
    tenant: req.user.id,
    description
  });

  res.status(201).json({
    status: 'success',
    data: newRequest
  });
});

// 2) Get All Maintenance Requests (Landlord/Admin)
exports.getAllMaintenanceRequests = catchAsync(async (req, res, next) => {
  const requests = await Maintenance.find()
    .populate('tenant', 'name email')
    .populate('property', 'title');
  res.status(200).json({
    status: 'success',
    data: { requests }
  });
});

// 📌 Get Single Maintenance Request (Tenant or Landlord)
exports.getMaintenanceRequest = catchAsync(async (req, res, next) => {
  const request = await Maintenance.findById(req.params.id)
    .populate('tenant', 'name email')
    .populate('property', 'title');

  if (!request) {
    return next(new AppError('Maintenance request not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: request
  });
});

// 📌 Update Maintenance Request (Landlord Only)
exports.updateMaintenanceRequest = catchAsync(async (req, res, next) => {
  const { status } = req.body;

  const updatedRequest = await Maintenance.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!updatedRequest) {
    return next(new AppError('Maintenance request not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { updatedRequest }
  });
});
