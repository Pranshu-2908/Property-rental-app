const express = require('express');
const tenancyController = require('../controllers/tenancyController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('landlord'),
    tenancyController.createTenancy
  );

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'landlord', 'tenant'),
    tenancyController.getTenancy
  )
  .patch(
    authController.protect,
    authController.restrictTo('landlord'),
    tenancyController.updateTenancy
  )
  .delete(
    authController.protect,
    authController.restrictTo('landlord'),
    tenancyController.deleteTenancy
  );

module.exports = router;
