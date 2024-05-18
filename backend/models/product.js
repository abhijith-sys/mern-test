const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['regular', 'normal'], required: true }
});

module.exports = mongoose.model('Product', productSchema);
