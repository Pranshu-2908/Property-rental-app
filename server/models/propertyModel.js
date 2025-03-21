const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },

  location: {
    type: String,
    required: true
  },
  tenantsPrefferd: {
    type: String,
    enum: ['Students', 'Bachelors', 'Co-living', 'Family'],
    requird: true,
    default: 'Students'
  },
  available: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  images: [String]
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
