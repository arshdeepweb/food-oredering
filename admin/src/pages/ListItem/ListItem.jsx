import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const ListItem = ({url}) => {

  const [list, setList] = useState([])

  const fetchItems = async () =>{
    const response = await axios.get(`${url}/api/food/list`)
    if(response.data.success){
      console.log(response.data)
      setList(response.data.data)
      console.log(list)
    }else{
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const removeItem = async (foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchItems()
    if(response.data.success){
      toast.success(response.data.message)
      
    }else{
      toast.error(response.data.message)
    }
  }
  

  return (
    <div>
       <div className=' w-[90%] sm:w-[80%] m-auto border-2 border-solid border-[#ec3131] my-10'>
        <div className="my-6">
          <div className="grid grid-cols-5 gap-4 justify-items-center items-center">
            <p className="text-xl font-bold">Item</p>
            <p className="text-xl font-bold">Name</p>
            <p className="text-xl font-bold">Price</p>
            <p className="text-xl font-bold">Category</p>
            <p className="text-xl font-bold">Remove</p>
          </div>
          <br />
          <hr className="h-[2px] bg-[#ec3131] " />
          <div className="mb-[5rem]">
            {list.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-5 justify-items-center items-center my-3">
                      <img
                        src={`${url}/images/`+item.image}
                        className="w-[85px] rounded-xl"
                        alt=""
                      />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{item.category}</p>
                      <p onClick={()=>removeItem(item._id)} className='cursor-pointer'>X</p>
                    </div>
                    <hr className="h-[2px] bg-[#ec3131] " />
                  </div>
                );
            })}
          </div>
        </div>
       </div>
    </div>
  )
}

export default ListItem