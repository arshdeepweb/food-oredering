import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <>
      <div>
        <div className='flex sm:flex-row flex-col gap-8 justify-evenly items-center text-white py-[4rem] bg-[#252525] w-[100%]'>
          <div className='flex flex-col gap-2'>
            <div>
            <h2 className='text-4xl text-[#ec3131] font-bold'>Delicious Food</h2>
            </div>
            
            <p className=''>Lorem ipsum dolor </p>
            <div className='flex'>
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div>
            <h2 className='text-4xl text-white mt-4 font-bold font-sans my-4'>Company</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className='text-4xl text-white mt-4 font-bold font-sans my-4'>GET IN TOUCH</h3>
            <p>+1-213-465-4359</p>
            <p>contact@deliciousfood.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer