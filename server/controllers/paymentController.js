const Payment = require('../models/paymentModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Create Payment
exports.createPayment = catchAsync(async (req, res, next) => {
  const { landlord, property, amount } = req.body;

  const payment = await Payment.create({
    tenant: req.user.id,
    landlord,
    property,
    amount
  });

  res.status(201).json({
    status: 'success',
    data: { payment }
  });
});

// Get All Payments
exports.getAllPayments = catchAsync(async (req, res, next) => {
  const payments = await Payment.find();

  res.status(200).json({
    status: 'success',
    results: payments.length,
    data: { payments }
  });
});

// Get Single Payment
exports.getPayment = catchAsync(async (req, res, next) => {
  const payment = await Payment.findById(req.params.id);

  if (!payment) return next(new AppError('Payment not found', 404));

  res.status(200).json({
    status: 'success',
    data: { payment }
  });
});

// Update Payment (e.g., Mark as Paid)
exports.updatePayment = catchAsync(async (req, res, next) => {
  const { status } = req.body;
  const payment = await Payment.findByIdAndUpdate(
    req.params.id,
    { status },
    {
      new: true,
      runValidators: true
    }
  );

  if (!payment) return next(new AppError('Payment not found', 404));

  res.status(200).json({
    status: 'success',
    data: { payment }
  });
});
