import React,{useContext} from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/DescriptionBox/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {allprod}=useContext(ShopContext);
  const {productId}=useParams()
  const product=allprod.find((e)=> e.id===Number(productId))
  return (
    <div>
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product