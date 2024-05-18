import React, { useEffect, useState } from 'react'
import styles from "../ProductList/ProductList.module.css"
import { applyCoupons, getCart } from '../../services/productservice'
import { useNavigate } from 'react-router-dom'

const CartList = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const [coupon, setCoupon] = useState("")

  const hangleGetProducts = async () => {
    try {
      const response = await getCart();
      console.log(response.data)
      setCart(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    hangleGetProducts()
  }, [])

  const handlecheckout = () => {

  }


  const handlecoupan = async () => {
    console.log(coupon)
    if (!coupon.trim) {
      alert("coupon code required");
      return
    }
    try {
      const data = {
        coupon_code: coupon
      }
      const response = await applyCoupons(data);
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      alert("coupon addded successfully")
    } catch (e) {
      // console.log(e.response.data.error)
      alert(e.response.data.error)



    }


  }

  return (
    <div className={styles.mainContainer}>
      <h1>Cart</h1>

      <input type="text" name="coupon" id="" onChange={(e) => { setCoupon(e.target.value) }} placeholder='coupon code' />
      <br></br> <button onClick={handlecoupan}>Apply coupans</button>
      <div className={styles.ListCotnainer}>
        {

          cart?.map((product) => {

            return (
              <div className={styles.card} key={product._id}>
                <h4>{product.product_id.name}</h4>
                <h3>price:{product.product_id.price}</h3>
                <span>type:{product.product_id.type}</span>
                <span>quantity:{product.qty}</span>
                <div className={styles.cartbtn} >Remove from Cart</div>
              </div>)
          })
        }
      </div>

    </div>
  )
}

export default CartList
