import React, { useEffect, useState } from 'react'
import './Collections.css'
//import collections from '../Assets/new_collections'
import Item from '../Items/Item'

const Collections = () => {

  const [new_collections,setnewcollection]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection').then((response)=>response.json().then((data)=>setnewcollection(data)))
},[])


  return (
    <div className='collections'><h1>NEW COLLECTIONS <hr/></h1>
    <div className="collection-item">
        {new_collections.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}
    </div>
    </div>
  )
}

export default Collections