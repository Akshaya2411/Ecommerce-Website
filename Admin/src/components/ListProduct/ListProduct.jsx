import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import remove from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts,setAllProducts]=useState([]);
  const fetchInfo =async()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)});
  }
  useEffect(()=>{
    fetchInfo();
  },[])
  const remove_prod =async(id)=>{
    let responsedata;
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    },body:JSON.stringify({id:id}),}).then((res)=>res.json()).then((data)=>{data.success?alert("Product removed"):alert("An error occured while removing")})
    await fetchInfo();

  }
 
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      
      <div className="listproducts-allproducts">
      <hr/>
        {allproducts.map((product,index)=>{

          return <><div key={index} className='listproduct-format-main listproduct-format'>
            <img src={product.image} alt="" className='listproduct-prodimg'/>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{
              remove_prod(product.id)
            }} className='listproduct-remove' src={remove} alt=""/>
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct