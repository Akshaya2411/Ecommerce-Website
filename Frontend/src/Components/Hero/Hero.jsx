import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY!</h2>
            <div>
        <div className="hand-icon">
            <p>new</p>
            <span><img className='hand-img' src={hand_icon}/></span>
        </div>
    <p>Collections</p>
    <p>for everyone!</p>
    <div className='latest'>
        <div className="div">
          <button className="latest-btn">Latest Collection  <img src={arrow_icon}/></button>          
        </div>
    </div>
    </div>
    </div>
    <div className="hero-right">
    <img src={hero_img}/>
     </div>
     </div>
  )
}

export default Hero