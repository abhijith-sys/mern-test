const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Cart = require('./models/cart');
const Product = require('./models/product');
const Coupon = require('./models/coupon');
const cors = require('cors');
// require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');;

const password = "NMx9qcTRDm22iNQc";
const connectionString = `mongodb+srv://abhijith12051:${password}@ecome.tckkew1.mongodb.net/?retryWrites=true&w=majority&appName=ecome`;

const productRoutes = require('./routes/produtRoutes');
const cartRoutes = require('./routes/cartRoutes');
const couponRoutes = require('./routes/couponRoutes');

const app = express();
const PORT = 5000;


const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}

connectToDB()
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(connectionString, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("ecommerce").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }




app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());




// run().catch(console.dir);

app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/coupons', couponRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

