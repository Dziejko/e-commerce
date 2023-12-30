import { useEffect, useState } from "react"

import { Price } from "../components/Pricee"
import { Link } from "react-router-dom"


export function Cart({cartItems,setCartItems}){
   const [totalPrice,setTotalPrice]=useState(0)
   const[discounts,setDiscounts]=useState(0)
   function remove(item,idx){
      setCartItems(cartItems.filter((prevItem,index)=>index!==idx))
     setTotalPrice(prevPrice=>prevPrice-item.price*(100-item.reducedPercent)/100)
     setDiscounts(prevDisc=>prevDisc-item.price*item.reducedPercent/100)
   }
   useEffect(()=>{
   
      let prices=cartItems.map(item=>item.price-item.price*item.reducedPercent/100)
         prices.map(price=>setTotalPrice(prevPrice=>prevPrice+price))
      let discList=cartItems.filter(item=>item.isReduced===true)
      let disc=discList.map(item=>item.price-item.price*(100-item.reducedPercent)/100)
         disc.map(disc=>setDiscounts(prevDisc=>prevDisc+disc))
      },[])
   

    return (
        <>
         <main className="main-container cart-main-container">
         <p className='all-products'>MY-CART</p>
         <div className='underline'></div>
         {cartItems.length>0
         ?
         <section className="cart-container">
                 
            <ul className="cart-list">
         {cartItems.map((item,idx)=>
         <>
          <li className="cart-item" key={item.id}>
             <img className="cart-image"  src={item.image} />
             <div className="cart-item-info-container">
             <div className="cart-item-info">
               <p className='item-name'>{item.name}</p>
               <Price item={item}/>
               <button onClick={()=>remove(item,idx)} className="remove-btn">Remove</button>
               </div>
              
           </div>
        
            </li>
            {cartItems.length>1&& <hr/>}
           
            </>
         )}
         </ul>
            <div className="summary-section">
            <p className='all-products price-details'>PRICE DETAILS</p>
            <div className='underline'></div>
               <div className="summary-grid">
                  <p>Price ({cartItems.length})</p>
                  <p>${Math.round(totalPrice).toFixed(2)}</p>
                  <p>Discounts</p>
                  <p>${Math.round(discounts).toFixed(2)}</p>
                  <p>Delivery Charges</p>
                  <p className="reduced-percent">Free</p>
               </div>
                  <hr className="summary-hr" />
               <div className="total-price-div">
                  <p>Total amount</p>
                  <p>${Math.round(totalPrice).toFixed(2)}</p>
               </div>
               <p className="reduced-percent summary-discounts">
                  You will save ${Math.round(discounts).toFixed(2)} on this order</p>
               <button disabled="disabled" className="place-order-btn">Place order</button>
             
            </div>
         </section>
         :
         <div className="empty-cart-div">
         <img className="empty-cart-img" src="src/icons/empty-cart.png"/>
        <Link to='/home'>
         <button className="empty-cart-btn">Back To Shopping</button>
         </Link>
        
         </div>
        
         }
            
         </main> 
        
        </>
    )
}