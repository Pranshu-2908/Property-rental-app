const mongoose = require('mongoose');

const tenancySchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true
    },
    landlord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    leaseStartDate: {
      type: Date,
      required: true
    },
    leaseEndDate: {
      type: Date,
      required: true
    },
    rentAmount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['Paid', 'Pending', 'Overdue'],
      default: 'Pending'
    }
  },
  {
    timestamps: true
  }
);

const Tenancy = mongoose.model('Tenancy', tenancySchema);
module.exports = Tenancy;
