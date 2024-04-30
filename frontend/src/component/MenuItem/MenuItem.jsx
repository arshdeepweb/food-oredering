import React, {useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function MenuItem({category}) {

  const {food_list} = useContext(StoreContext)

  return (
    <div>
      <div>
        <h2 className='text-3xl font-sans font-bold my-[2rem]'>Top Dishes For Our Restaurant</h2>
      </div>
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
      </div>
    </div>
  )
}

export default MenuItem