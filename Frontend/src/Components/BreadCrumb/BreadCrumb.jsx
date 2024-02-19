import React from 'react'
import './BreadCrumb.css'
import arrow from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    const {product}=props;
  return (
    <div className='breadcrumb'>
       <p><Link style={{textDecoration:'none'}}  to='/'>Home</Link> </p> <img src={arrow}/> <p><Link style={{textDecoration:'none'}}  to="/">Shop</Link> </p> <img src={arrow} /><p><Link style={{textDecoration:'none'}}  to={"/"+ product.category}>{product.category}</Link> </p> <img src={arrow}/> {product.name}
    </div>
  )
}

export default BreadCrumb