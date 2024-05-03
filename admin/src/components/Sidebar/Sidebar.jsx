import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className='w-[100%] flex pt-[3rem] flex-col min-h-[100vh] gap-[2.5rem] items-end border-r-2 border-slate-500 border-solid'>
        <NavLink to='/' className={({isActive})=>`flex w-[80%] p-3 gap-[1rem] border-2 border-slate-500 ${isActive? "bg-[#fff0ed] border-orange-700":""} border-r-0 border-solid`}>
          <img src={assets.add_icon} alt="" />
          <p className='hidden md:inline'>Add Items</p>
        </NavLink >
        <NavLink to='/list' className={({isActive})=>`flex w-[80%] p-3 gap-[1rem] border-2 border-slate-500 ${isActive? "bg-[#fff0ed] border-orange-700":""} border-r-0 border-solid`}>
          <img src={assets.order_icon} alt="" />
          <p className='hidden md:inline'>List Items</p>
        </NavLink >
        <NavLink to='/orders' className={({isActive})=>`flex w-[80%] p-3 gap-[1rem] border-2 border-slate-500 ${isActive? "bg-[#fff0ed] border-orange-700":""} border-r-0 border-solid`}>
          <img src={assets.order_icon} alt="" />
          <p className='hidden md:inline'>Orders</p>
        </NavLink >
      </div>
    </div>
  )
}

export default Sidebar