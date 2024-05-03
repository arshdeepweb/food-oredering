import React from 'react'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div>
      <div className='flex justify-between p-0 sm:px-[5rem] w-[100%] h-[70px] items-center'>
        <img src={assets.logo} className='w-[140px]' alt="" />
        <img src={assets.profile_image} className='w-[50px]' alt="" />
      </div>
    </div>
  )
}

export default Navbar