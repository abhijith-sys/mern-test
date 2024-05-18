const Cart = require('../models/cart');
const Product = require('../models/product');

exports.addToCart = async (req, res) => {
    try {
        const cartItem = new Cart(req.body);
        await cartItem.save();
        res.status(201).send(cartItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getCart = async (req, res) => {
    try {
        const cartItems = await Cart.find({}).populate('product_id');
        res.send(cartItems);
    } catch (error) {
        res.status(500).send(error);
    }
};
