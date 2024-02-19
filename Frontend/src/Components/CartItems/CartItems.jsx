import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const {getTotalAmount,allprod,cartItems,removeFromcart}=useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
     {allprod.map((e)=>{
      if(cartItems[e.id]>0){
        return(<div>
        <div className="format format-main">
          <img src={e.image}  className='carticon'/>
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='quant'>{cartItems[e.id]}</button>
          <p>${e.new_price * cartItems[e.id]}</p>
          <img src={remove_icon} onClick={()=>{removeFromcart(e.id)}} className='remove-icon'/>
        </div>
        <hr/>
      </div>)
      }
      return null;
     })}
     <div className='totalitems'>
      <div className="total">
        <h1>Cart Totals</h1>
        <div>
          <div className="tot">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr/>
            <div className="tot">
            <p>Shipping Fee</p>
            <p>Free</p>
            </div>
            <hr/>
            <div className='tot'>
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
        </div>
        <button className='cout'>Checkout</button>
      </div>
      <div className="promo">
        <p>Enter your promo code</p>
        <div className='promobox'>
          <input type="text" placeholder='Enter promo code'/>
          <button>Submit</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default CartItems