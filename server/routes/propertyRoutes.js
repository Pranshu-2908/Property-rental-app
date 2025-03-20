const express = require('express');
const propertyController = require('../controllers/propertyController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(propertyController.getAllProperties)
  .post(
    authController.protect,
    authController.restrictTo('landlord', 'admin'),
    propertyController.uploadPropertyImages, // Image upload middleware
    propertyController.createProperty
  );
router.get(
  '/rented',
  authController.protect,
  propertyController.getRentedProperties
);

router
  .route('/:id')
  .get(propertyController.getProperty)
  .patch(
    authController.protect,
    authController.restrictTo('landlord', 'admin'),
    propertyController.uploadPropertyImages, // Image upload middleware
    propertyController.updateProperty
  )
  .delete(
    authController.protect,
    authController.restrictTo('landlord', 'admin'),
    propertyController.deleteProperty
  );

module.exports = router;
