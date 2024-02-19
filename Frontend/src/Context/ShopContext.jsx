
import React,{ createContext, useEffect, useState} from "react";
//import allprod from '../Components/Assets/all_product'

export const ShopContext=createContext(null);
const getdefaultcart=()=>{
    let cart={};
    for(let index=0;index<300+1;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>
{
    const [allprod,setAll_Product]=useState([]);
    const[cartItems,setCartItems]=useState(getdefaultcart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts').then((response)=>response.json().then((data)=>setAll_Product(data)))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/cartdata',{
                method:"POST",
                headers:{
                    'Accept': 'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },body:"",
            }).then((response)=>response.json()).then((data)=>setCartItems(data))
        }

    },[])
    
    const addTocart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        fetch('http://localhost:4000/addtocart', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "itemId": itemId }),
        });
    }
 
    //console.log(cartItems)
    const removeFromcart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        fetch('http://localhost:4000/removefromcart', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "itemId": itemId }),
        });
    }
    const getTotalAmount=()=>{
        let totamo=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let info=allprod.find((product)=>product.id===Number(item))
                totamo = totamo + info.new_price * cartItems[item]
            }
           
        }
        return totamo;
        
    }
    const getTotalCartItems=()=>{
        let no_items=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                no_items = no_items +  cartItems[item]
            }
           
        }
        return no_items;
        
    }
   
    const contextValue={getTotalCartItems,getTotalAmount,allprod,cartItems,addTocart,removeFromcart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;