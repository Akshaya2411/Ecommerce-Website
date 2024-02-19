import React, { useContext } from 'react'
import starfilled from '../Assets/star_icon.png'
import './ProductDisplay.css'
import star from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addTocart}=useContext(ShopContext);
  return (
    <div className='productdetails'>
        <div className="product-left">
            <div className='small'>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            </div>
            <div className='big'><img src={product.image}/></div>
            
        </div>
    <div className="product-right">
        <h1>{product.name}</h1>
        <div className='rating'>
            <img src={starfilled}/>
            <img src={starfilled}/>
            <img src={starfilled}/>
            <img src={starfilled}/>
            <img src={star}/>
        </div>
        <div className='prices'>
            <div className="old">${product.old_price}</div>
            <div className="new">${product.new_price}</div>
        </div>
        <div className='desc'>
            <p>Category: {product.category}</p>
            <br/>
            <p>A {product.name.toLowerCase()}</p>

        </div>
        <div className='size'>
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        </div>
        <div className='cart'>
        <button onClick={()=>addTocart(product.id)}>Add to cart</button>
     </div>
     </div>
    
     </div>
  )
}

export default ProductDisplay