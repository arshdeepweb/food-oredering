import React, {useContext, useState} from 'react'
import {assets} from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import {Link} from 'react-router-dom'
import '../../index.css'
function Navbar({setShowLogin, setShowSearch}) {

  const [menu, setMenu] = useState("home")
 const {cartItems, getTotalCartAmount,token, setToken} = useContext(StoreContext)

  const logOut = async () =>{
    setToken(false)
    localStorage.removeItem("token")
  }

  return (
    <>
    <div className='flex justify-evenly h-[3rem] items-center my-4'>
      <div>
        <Link to='/'><h2 className='text-4xl text-[#ec3131] font-bold'>Delicious Food</h2></Link>
      </div>
      <ul className='hidden md:flex gap-8'>
          <Link to='/'><li className={`${menu==="home"?"text-[#ec3131]":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("home")}}>Home</li></Link>
          <Link to='/dishes'><li className={`${menu==="menu"?"text-[#ec3131]":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("menu")}}>Dishes</li></Link>
          <li className={`${menu==="mobile-app"?"text-[#ec3131]":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("mobile-app")}}>About</li>
          <li className={`${menu==="contact-us"?"text-[#ec3131]":"text-gray-700"} cursor-pointer`} onClick={()=>{setMenu("contact-us")}}>Contact</li>
          
      </ul>
      <div className='flex gap-4 sm:gap-8 items-center'>
        <div className='flex gap-4 sm:gap-8'>
          <img className='h-[28px] hover:cursor-pointer' src={assets.search_icon} alt="" onClick={()=>{setShowSearch(true)}} />
          <div>
          <Link to='/cart'><img className='h-[28px] relative' src={assets.basket_icon} alt="" /></Link>
          {
            getTotalCartAmount()>0?
            <p className=' text-[10px] rounded-[50%] p-1 top-[18px] mx-5 bg-red-500 text-white absolute'>{Object.keys(cartItems).length}</p>:""
          }
          

          </div>
        </div>
        {
          token? 
          <div className='flex flex-col group relative'>
            <img src={assets.profile_icon} alt="" className='cursor-pointer' />
            <ul className='absolute z-50 mt-10 bg-[#fff0ed] border-2 border-solid hover:cursor-pointer border-[#ec3131] p-4 w-[10rem] rounded-md gap-3 child invisible group-hover:visible flex flex-col transition-all'>
              <Link to='/myorders' className='flex gap-1'>
                <img src={assets.bag_icon} className='w-[25px]' alt="" />
                <p className='font-semibold hover:text-[#ec3131]'>Orders</p>
              </Link>
              <li onClick={logOut} className='flex gap-1 hover:cursor-pointer'>
                <img src={assets.logout_icon} alt="" className='w-[25px]'/>
                <p className='font-semibold hover:text-[#ec3131]'>Log Out</p>
              </li>
            </ul>
          </div> :<button className='border-2 border-[#ec3131] border-solid hover:bg-[#ec3131] hover:text-white transition-all bg-transparent rounded-2xl py-2 px-5' onClick={()=>setShowLogin(true)} >Sign in</button>
        }
      </div>
    </div>
    <hr className='my-4 h-1 w-[100%] bg-[#ec3131] ' />
      </>
  )
}

export {Navbar}