import { useEffect, useState } from "react";


import { Price } from "../components/Pricee";
import { useLocation } from 'react-router-dom'

import starIcon from "../icons/star-icon.svg"

export function Item({cartItems,setCartItems}){
    const location=useLocation()

    const [item,setItem]=useState([])
    useEffect(()=>{
       setItem(location.state.data)
    },[])
  
   
  

    return(
        <>

        <main className="main-container item-page-container">
            <div className="item-page-image-div">
                <img src={item.image} />
            </div>
        
            <section className="item-page-section">
                
                <p className='item-name'>{item.name}</p>
                    
                    <p className='rating'>{item.ratingRate}<img src={starIcon}/></p>
                    <Price item={item}/>
                    <p className='description'>{item.description}</p>
                    {(cartItems.filter(cartItem=>{
                        return cartItem.id===item.id
                    }))==false
                    ? 
                    <button onClick={()=>setCartItems(prevCartItems=>[...prevCartItems,item])}
                     className="add-to-cart-btn">Add To Cart</button>
                    : 
                    <button onClick={()=>setCartItems(prevCartItems=>prevCartItems.filter(prevItem=>prevItem.id!==item.id))}
                     className="remove-from-cart-btn">Remove From Cart</button>}
                 
            </section>
                 
           
          
           
        </main>
    
        </>
    )
}