import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
//import data_product from '../Assets/data'
import Item from '../Items/Item'

const RelatedProducts = (props) => {
  const {product}=props;
  const [related,setrelated]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/related',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({category:product.category})
    }).then((response)=>response.json().then((data)=>setrelated(data)))
},[])
  return (
    <div className="related">
        <h1>Related Products</h1>
        <hr/>
        <div className="itemsrel">
        {related.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}
         
        </div>
    </div>
  )
}

export default RelatedProducts