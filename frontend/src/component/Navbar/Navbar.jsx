import React, {useContext, useState} from 'react'
import {assets} from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import {Link} from 'react-router-dom'
function Navbar({setShowLogin}) {

  const [menu, setMenu] = useState("home")
 const {cartItems, getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='flex justify-evenly h-[3rem] items-center my-4'>
      <div>
        <Link to='/'><img src={assets.logo} alt="" /></Link>
      </div>
      <ul className='hidden md:flex gap-8'>
          <Link to='/'><li className={`${menu==="home"?"text-orange-600":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("home")}}>Home</li></Link>
          <li className={`${menu==="menu"?"text-orange-600":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("menu")}}>Menu</li>
          <li className={`${menu==="mobile-app"?"text-orange-600":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("mobile-app")}}>Mobile-App</li>
          <li className={`${menu==="contact-us"?"text-orange-600":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("contact-us")}}>Contact-Us</li>
          
      </ul>
      <div className='flex gap-4 sm:gap-8 items-center'>
        <div className='flex gap-4 sm:gap-8'>
          <img className='h-[28px]' src={assets.search_icon} alt="" />
          <div>
          <Link to='/cart'><img className='h-[28px] relative' src={assets.basket_icon} alt="" /></Link>
          {
            getTotalCartAmount()>0?
            <p className=' text-[10px] rounded-[50%] p-1 top-[18px] mx-5 bg-red-500 text-white absolute'>{Object.keys(cartItems).length}</p>:""
          }
          

          </div>
        </div>
        <button className='border-2 border-orange-700 border-solid bg-transparent rounded-2xl py-2 px-5' onClick={()=>setShowLogin(true)} >Sign in</button>
      </div>
    </div>
  )
}

export {Navbar}