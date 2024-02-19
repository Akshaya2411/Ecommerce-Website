import React, { useEffect, useState } from 'react'
import './Popular.css'
//import data from '../Assets/data'
import Item from '../Items/Item'
const Popular = () => {

  const [popular,setpopular]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/popular').then((response)=>response.json().then((data)=>setpopular(data)))
},[])


  return (
    <div className='popular'><h1>POPULAR IN WOMEN <hr/></h1>
    <div className="popular-item">
        {popular.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}
    </div>
    </div>
  )
}

export default Popular