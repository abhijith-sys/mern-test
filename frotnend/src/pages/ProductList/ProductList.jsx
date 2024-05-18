import React, { useEffect, useState } from 'react';
import styles from "./ProductList.module.css"
import { addtoCart, getProducts } from '../../services/productservice';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
 
    const hangleGetProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        hangleGetProducts()
    }, [])

    const handleClick = async (id) => {
        try {

            const data = {
                product_id: id, qty: 1
            }
            await addtoCart(data);
            alert("product added successfully");
            navigate("/cart")
        } catch (error) {

            console.log(error);

        }
    }


    useEffect(() => {
        products.map((data) => {
            console.log(data)
        })
    }, [products])

    return (
        <div className={styles.mainContainer}>
            <h1>Lists</h1>
            <div className={styles.ListCotnainer}>

                {

                    products?.map((product) => {

                        return (
                            <div className={styles.card} key={product._id}>
                                <h4>{product.name}</h4>
                                <h3>price:{product.price}</h3>
                                <span>type:{product.type}</span>

                                <div className={styles.cartbtn} onClick={() => handleClick(product._id)}>Add to Cart</div>
                            </div>)
                    })
                }

            </div>
        </div>
    )
}

export default ProductList
