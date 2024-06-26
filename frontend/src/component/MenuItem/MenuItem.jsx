import React, {useContext, useEffect, useState} from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import axios from 'axios'

function MenuItem({category}) {

  const {food_list,URL} = useContext(StoreContext)
  
  

  return (
    <div>
      <div>
        <h2 className='text-3xl font-sans font-bold my-[2rem]'>Top Dishes For Our Restaurant</h2>
      </div>
      {food_list.length==0?
      <div class="border-gray-300 h-20 w-20 m-auto my-6 animate-spin rounded-full border-8 border-t-[#ec3131]" />
      :
      <div className='flex justify-evenly gap-4 flex-wrap'>
        {food_list.map((item, index)=>{
          if(category === "All" || category === item.category){
            
            return (
              <div key={index}>
                <FoodItem id={item._id} price={item.price} name={item.name} description={item.description} image={item.image} />
              </div>
            )
          }
        })}
      </div>}
    </div>
  )
}

export default MenuItem