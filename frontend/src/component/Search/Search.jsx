import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const Search = ({setShowSearch}) => {

  const {food_list, URL, cartItems, addToCart, removeToCart} = useContext(StoreContext)
  const [foodList, setFoodList] = useState([])
  const [searchValue, setSearchValue] = useState("")
  
  const searchHandler = () =>{

    console.log(searchValue);
    if(searchValue == ""){
      setFoodList(food_list)
    } 
      const filterFood = food_list.filter((item)=>{
        if(item.name.toLowerCase().includes(searchValue.toLowerCase())){
          return item;
        }
      })
      setFoodList(filterFood)
  }

  useEffect(() => {
    
    searchHandler()
  }, [searchValue])
  

  return (
    <div>
      <div className='absolute w-[100%] top-0 h-[100%] bg-black opacity-95  overflow-y-hidden grid z-50'>
        <div  className='p-8 max-w-[330px, 30vw] w-[50vw] border-2 border-solid border-[#ec3131] rounded-md bg-white place-self-center'>
        <div className='flex justify-between'>

            <h3 className='text-2xl font-bold'>Search</h3>
          
          <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=>{setShowSearch(false)}} />

          
        </div>
          <div>
            <input type="text" placeholder='Enter Search Product' className='p-2 my-4 border-2 border-solid border-[#ec3131] outline-none w-[100%] text-lg rounded-md' onChange={(e)=>setSearchValue(e.target.value)} />
          </div>
       
       <div className='max-h-[500px] overflow-y-auto p-r-10'>
        {foodList.map((item, index)=>{
          return(
            <div key={index} className=' '>
            <div className='  flex flex-wrap gap-3 shadow-2xl my-8 rounded-md '>
              <div >
              <img src={`${URL}/images/`+item.image} alt="" className='rounded-md w-[18rem] relative' />
              </div>
              <div className='my-3 p-2 flex gap-5'>
                <div className='flex flex-col gap-6 justify-between items-center'>
                  <p className='text-xl font-semibold'>{item.name}</p>
                  
                <p className='my-2'>{item.description}</p>
                <p className='font-semibold'>{item.price}$</p>
                
                </div>
                <div>
                {
            !cartItems[item._id]?
              <img src={assets.add_icon_white} onClick={()=>{addToCart(item._id)}} className=' w-[40px] bottom-[15px] right-[15px]' alt='' />
            :
            <div className=' bottom-[15px] right-[15px] flex gap-2 p-1 rounded-[50px] items-center bg-white'>
              <img src={assets.remove_icon_red} onClick={()=>{removeToCart(item._id)}} alt="" />
              <p>{cartItems[item._id]}</p>
              <img src={assets.add_icon_green} onClick={()=>{addToCart(item._id)}} alt="" />
            </div>
          }
                </div>
              </div>
      </div>
          </div>
          )
        })}
       </div>
       
      
        </div>
        
    </div>
    </div>
  )
}

export default Search