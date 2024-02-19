import React from 'react'
import './Footer.css'
import logo from '../Assets/logo_big.png'
import { Link } from 'react-router-dom'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import wp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
         <div className="logo" >
            <img src={logo} alt=""/>
            <span> SHOPAHOLIC </span>
        </div>
      <ul className='nav-menu'>
        <li>Company</li>
        <li>Products </li>
        <li>Offices</li>
        <li>About Us</li>
        <li>Conatct</li>
      </ul>
      <div className='social-icons'>
        <img src={insta}/>
        <img src={wp}/>
        <img src={pin}/>
      </div>
      <hr/>
      <div className='copyrights'>
        <p>copyrights @2023- All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer