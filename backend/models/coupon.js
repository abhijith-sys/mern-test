const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    coupon_code: { type: String, required: true },
    value: { type: Number, required: true },
    type: { type: String, enum: ['percentage', 'fixed'], required: true }
});

module.exports = mongoose.model('Coupon', couponSchema);
