import React from 'react'
import { menu_list } from '../../assets/assets'
import '../../index.css'

function ExploreComponent({category, setCategory}) {

  return (
    <div>
      <div className=' gap-3 flex flex-col'>
        <h2 className='text-4xl mt-4 font-bold font-sans'> Explore Dish Category </h2>
        <p className='text-xl font-sans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere molestias ad laboriosam repellendus quos hic!</p>
        <div className='flex justify-between items-center overflow-x-scroll gap-6 no-scrollbar '>
        {menu_list.map((item, index)=>{
          return (
            <div onClick={()=>setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='flex flex-col gap-2 items-center '>
              <img src={item.menu_image} className={`w-[7.5vw] min-w-[80px] ${category === item.menu_name ? "border-4 border-solid border-orange-700 rounded-[50%]" : ""} `} alt="" />
              <p className='text-lg '>{item.menu_name}</p>
            </div>
        )
        })}
        </div>
        <hr className='h-[2px] bg-gray-600 mt-4' />
      </div>
      
    </div>
  )
}

export default ExploreComponent