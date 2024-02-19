import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import Collections from '../Components/New Collections/Collections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Collections/>
      <NewsLetter/>
    </div>
   
  )
}

export default shop