import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

function FoodItem({id,name,image,price,description}) {

  const [itemCount, setItemCount] = useState(0)
  const {cartItems,addToCart,removeToCart,URL} = useContext(StoreContext)

  return (
    <div>
      <div className=' w-[18rem] shadow-2xl my-8 rounded-md '>
        <div className='relative'>
          <img src={`${URL}/images/`+image} alt="" className='rounded-md relative' />
          {
            !cartItems[id]?
              <img src={assets.add_icon_white} onClick={()=>{addToCart(id)}} className='absolute w-[40px] bottom-[15px] right-[15px]' alt='' />
            :
            <div className='absolute bottom-[15px] right-[15px] flex gap-2 p-1 rounded-[50px] items-center bg-white'>
              <img src={assets.remove_icon_red} onClick={()=>{removeToCart(id)}} alt="" />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} onClick={()=>{addToCart(id)}} alt="" />
            </div>
          }
        </div>
        <div className='my-3 p-2'>
          <div className='flex justify-between items-center'>
            <p className='text-xl font-semibold'>{name}</p>
            <img src={assets.rating_starts} className=' w-[70px]' alt="" />
          </div>
          <p className='my-2'>{description}</p>
          <p className='font-semibold'>{price}$</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem