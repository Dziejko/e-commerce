import { useEffect, useState } from 'react'

import {BrowserRouter, HashRouter} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'

import './App.css'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Item } from './pages/Item'

import { Navbar } from './components/Navbar'

import data from './data.json'
function App() {
  
  const [items,setItems]=useState([])
  const [cartItems,setCartItems]=useState([])
 
  useEffect(()=>{
      setItems(data)
    }, [])

 return(
  <HashRouter>
  <Navbar cartItems={cartItems}/>
    <Routes>
      <Route index element={<Home cartItems={cartItems} setCartItems={setCartItems} items={items}/>}/>
      <Route path="/e-commerce/home" element={<Home cartItems={cartItems} setCartItems={setCartItems} items={items} />} />
      <Route path="/e-commerce/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
      <Route path="/e-commerce/item/:id" element={<Item cartItems={cartItems} setCartItems={setCartItems} />} />
    </Routes>
    </HashRouter>

  )

  
}

export default App
