const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const product = new Product(req.body);
        console.log(product);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};
