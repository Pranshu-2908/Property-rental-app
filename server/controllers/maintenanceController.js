const Maintenance = require('../models/maintenanceModel');
const AppError = require('../utils/appError');

// 1) Create a Maintenance Request (Tenant Only)
exports.createMaintenanceRequest = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

// 2) Get All Maintenance Requests (Landlord/Admin)
exports.getAllMaintenanceRequests = async (req, res, next) => {
  try {
    const requests = await Maintenance.find().populate(
      'property tenant',
      'name email'
    );
    res.status(200).json({
      status: 'success',
      data: requests
    });
  } catch (error) {
    next(error);
  }
};

// 📌 Get Single Maintenance Request (Tenant or Landlord)
exports.getMaintenanceRequest = async (req, res, next) => {
  try {
    const request = await Maintenance.findById(req.params.id).populate(
      'property tenant',
      'name email'
    );

    if (!request) {
      return next(new AppError('Maintenance request not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: request
    });
  } catch (error) {
    next(error);
  }
};

// 📌 Update Maintenance Request (Landlord Only)
exports.updateMaintenanceRequest = async (req, res, next) => {
  try {
    const { status, assignedVendor } = req.body;

    const updatedRequest = await Maintenance.findByIdAndUpdate(
      req.params.id,
      { status, assignedVendor },
      { new: true, runValidators: true }
    );

    if (!updatedRequest) {
      return next(new AppError('Maintenance request not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: updatedRequest
    });
  } catch (error) {
    next(error);
  }
};
