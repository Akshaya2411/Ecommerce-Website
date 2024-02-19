import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
function Navbar() {
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

    return (
      <nav className='navbar' >
        <div className="logo" >
           <Link to="/"><img src={logo} alt=""/></Link> 
            <span> SHOPAHOLIC </span>
        </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("men")}><Link style={{textDecoration:"none"}} to="/men">Men </Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("women")}>  <Link style={{textDecoration:"none"}} to="/women">Women </Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:"none"}} to="/kid">Kids </Link>  {menu==="kids"?<hr/>:<></>}</li>
      </ul>

      <div className='login'>
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace("/")}}>Logout</button>: <Link to="/login"><button>Login</button></Link>}
     
      <Link to="/cart"> <img src={cart}/></Link>
        <div className="count">{getTotalCartItems()}</div>
      </div>
      </nav>
     
    );
  }
  
  export default Navbar;