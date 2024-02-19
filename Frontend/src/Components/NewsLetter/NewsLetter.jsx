import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our news letter and stay updated.</p>
        <div className='userinfo'>
            <input type='email' placeholder='Enter your Email ID'/>
            <button type='submit'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter