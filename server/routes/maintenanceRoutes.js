const express = require('express');
const maintenanceController = require('../controllers/maintenanceController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('tenant'),
    maintenanceController.createMaintenanceRequest
  )
  .get(
    authController.protect,
    authController.restrictTo('landlord', 'tenant'),
    maintenanceController.getAllMaintenanceRequests
  );

router
  .route('/:id')
  .get(authController.protect, maintenanceController.getMaintenanceRequest)
  .patch(
    authController.protect,
    authController.restrictTo('landlord'),
    maintenanceController.updateMaintenanceRequest
  );

module.exports = router;
