import React from 'react'
import './Offer.css'
import exclusive from '../Assets/exclusive_image.png'
import arrow_icon from '../Assets/arrow.png'

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Selling Products</p>
            <button className='check-now'>Check Now <img src={arrow_icon}/></button>
        </div>
        <div className='offers-right'>
            <img  className="exclusive-img" src={exclusive} alt=""/>
        </div>
    </div>
  )
}

export default Offer