const Coupon = require('../models/coupon');
const Cart = require('../models/cart');

exports.applyCoupon = async (req, res) => {
    const { coupon_code } = req.body;
    try {
        const coupon = await Coupon.findOne({ coupon_code });
        if (!coupon) return res.status(404).send({ error: 'Coupon not found' });

        const cartItems = await Cart.find({}).populate('product_id');
        let totalRegular = 0;
        cartItems.forEach(item => {
            if (item.product_id.type === 'regular') {
                totalRegular += item.product_id.price * item.qty;
            }
        });

        let discount = 0;
        if (coupon.type === 'percentage') {
            discount = (coupon.value / 100) * totalRegular;
        } else if (coupon.type === 'fixed') {
            discount = coupon.value;
        }

        if (discount > totalRegular) discount = totalRegular;

        res.send({ discount, totalAfterDiscount: totalRegular - discount });
    } catch (error) {
        res.status(500).send(error);
    }
};
