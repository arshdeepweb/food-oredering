import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../component/FoodItem/FoodItem'


const Menu = () => {

  const {food_list} = useContext(StoreContext)


  return (
    <div>
      <div className='flex justify-center items-center h-[100px] text-6xl text-[#ec3131]'>
        <h2>Dishes</h2>
      </div>
      <div className='flex justify-evenly gap-4 flex-wrap'>
        {food_list.map((item,index)=>{
          return (
            <div key={index}>
              <FoodItem id={item._id} price={item.price} name={item.name} description={item.description} image={item.image} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu