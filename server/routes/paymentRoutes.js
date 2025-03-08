const express = require('express');
const authController = require('./../controllers/authController');
const paymentController = require('./../controllers/paymentController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('tenant'),
    paymentController.createPayment
  )
  .get(paymentController.getAllPayments);

router
  .route('/:id')
  .get(paymentController.getPayment)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'landlord'),
    paymentController.updatePayment
  ); // Only Admin/Landlord can update payments

module.exports = router;
