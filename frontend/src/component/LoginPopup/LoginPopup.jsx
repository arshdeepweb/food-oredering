import React, { useState } from 'react'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

  const [showSignup, setShowSignup] = useState(false)


  return (
    <div className='absolute w-[100%] top-0 h-[100%] bg-black opacity-95  overflow-y-hidden grid z-50'>
        <form action="" className='p-8 max-w-[330px, 23vw] border-2 border-solid border-orange-700 rounded-md bg-white place-self-center'>
        <div className='flex justify-between'>
          {
            showSignup?<h3 className='text-xl font-bold'>Sign Up</h3>:<h3 className='text-xl font-bold'>Login</h3>
          }
          
          <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=>{setShowLogin(false)}} />
        </div>
          <div className='flex gap-[0.5rem] mt-3 flex-col'>
            {
              showSignup?
              <input type="text" placeholder='Enter Full Name' className='p-2 my-1 mt-3 border-2 border-solid border-gray-400 w-[100%] text-lg rounded-md' />:""
            }
            <input type="text" placeholder='Enter Email Id' className='p-2 my-1 border-2 border-solid border-gray-400 w-[100%] text-lg rounded-md' />
            <input type="password" placeholder='Enter Password' className='p-2 my-1 border-2 border-solid border-gray-400 w-[100%] text-lg rounded-md'/>
          </div>
          {
            showSignup?
            <button className='p-2 my-2 cursor-pointer border-2 border-solid border-orange-700 bg-orange-700 text-white w-[100%] text-lg rounded-md'>Create Account</button>:
            <button className='p-2 my-2 cursor-pointer border-2 border-solid border-orange-700 bg-orange-700 text-white w-[100%] text-lg rounded-md'>Login</button>
          }
          <div className='flex my-1 gap-3'>
          <input type="checkbox" />
          <p>By Continue, I agree to the Terms of use & Privacy Policy</p>
        </div>
        <div>
          {
            showSignup?
            <div className='flex'>
              <p>Already Have a account?</p>
              <p onClick={()=>{setShowSignup(false)}} className='text-orange-700 px-2 cursor-pointer'>Login Here</p>
            </div>:
            <div className='flex'>
              <p>Create a New Account?</p>
              <p onClick={()=>{setShowSignup(true)}} className='text-orange-700 px-1 cursor-pointer'>Click Here</p>
            </div>
          }
          
        </div>
        </form>
        
    </div>
  )
}

export default LoginPopup