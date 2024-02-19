import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_img from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'


const ShopCategory = (props) => {
  const {allprod}=useContext(ShopContext);
  return (
    <div className='shopcategory'> 
     <img className='banner' src={props.banner} />
     <div className="indexsort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="categorysort">
        Sort by <img  src={dropdown_img}/>
        </div>
      </div>
      <div className="products">
        {allprod.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
          }
        })}
    </div>
    <div className='loadmore'>
      Explore More
    </div>
    </div>

  )
}

export default ShopCategory