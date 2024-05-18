const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true }
});

module.exports = mongoose.model('Cart', cartSchema);
