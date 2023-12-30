

import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import { TopRates } from '../components/TopRates'
import { MostReduced } from '../components/MostReduced'
import { Price } from '../components/price'
import { Slider } from "../components/Slider";

export function Home({items,cartItems,setCartItems}){

   const[topRates,setTopRates]=useState([{}])
   const[mostReduced,setMostReduced]=useState([{}])
   const[images,setImages]=useState([])
      
   useEffect(()=>{
      setTopRates ([...items].sort((a, b) => b.ratingRate - a.ratingRate).slice(0,2))
      setMostReduced([...items].sort((a, b) => b.reducedPercent - a.reducedPercent).slice(0,3))
      setImages(items.slice(0,3))
   },[items])


    return (
        <>
      <Slider images={images}/>
    
        <main className='main-container'>

         {mostReduced.length >1 && <MostReduced cartItems={cartItems} setCartItems={setCartItems} mostReduced={mostReduced} />}
        {topRates.length >1 && <TopRates topRates={topRates}/>}
      
        
          <p className='all-products'>ALL PRODUCTS:- {items.length}</p>
          <div className='underline'></div>
        {items.length > 0 && 
        <ul className='list-items'>
        {items.map(item=>

        <Link key={item.id} to={`/item/${item.id}`} state={{data:item}} className='list-items'>
           <li className='list-item'>
              <img src={item.image} />
            
              <p className='item-name'>{item.name}</p>
              <Price item={item}/>
             
           </li> 
           </Link>
           )}
        </ul>}
        </main>
        </>
      )
}