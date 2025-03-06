const mongoose = require('mongoose');

const tenanciesSchema = new mongoose.Schema(
  {
    landlordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
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
    paymentHistory: [
      {
        paymentDate: {
          type: Date,
          required: true
        },
        amountPaid: {
          type: Number,
          required: true
        },
        status: {
          type: String,
          enum: ['Paid', 'Pending', 'Overdue'],
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Tenant = mongoose.model('Tenant', tenanciesSchema);

module.exports = Tenant;
