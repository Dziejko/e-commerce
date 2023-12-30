import { Link } from "react-router-dom"
import { useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import cartIcon from "../icons/icon-cart.svg"
import homeIcon from "../icons/home-icon.svg"

export function Navbar({cartItems}){
    const [isVisible,setIsVisible]=useState(false)

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

 
    function addClass(){
        const formSection=document.getElementById('form-section')
        isVisible!==true? formSection.classList.add('form-section-visible'):formSection.classList.remove('form-section-visible')
        setIsVisible(!isVisible)
    }
    function handleSubmit(e){
        e.preventDefault()
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword= (e)=>{
        setPassword(e.target.value)
    }

    
    return(
        <nav className='navbar'>
        <Link className="title" to="/e-commerce/home">
            <h1 className='title'>E-SHOES</h1>
        </Link>
       
        <Link to="/home">
            <img className='home-icon' src={homeIcon} />
        </Link>

        <Link to="/cart" >
        <div className="div-cart">
        <img className='cart-icon' src={cartIcon} />
        <span className="cart-items-count">{cartItems.length}</span>
        </div>
        </Link>
        <div className="login-btn-container">
         
        
            <button onClick={addClass} className='login-button'>Login</button>
            <section id="form-section" className="form-section">
                <form method="post"onSubmit={handleSubmit} className="login-form">
                    <input onChange={handleEmail} value={email} type="email" placeholder="Email" />
                    <input onChange={handlePassword} value={password} type="password" placeholder="Password" minLength={8} maxLength={24}/>
                    <button className="submit-login-btn" >Submit</button>
                </form>
         </section>

        
        
  
        </div>
        </nav>
    )
}