import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const AddItem = ({url}) => {


  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })


  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setData(data=>({...data,[name]:value}))
  }

  
  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)

    console.log(formData)
    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      console.log("Food Uploaded")
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)

    }else{
      console.log("Error")
      toast.error(response.data.message)
    }
    
  }
  

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='w-[80%] m-auto pt-8'>
        <div>
          <h2 className='text-4xl mb-6 font-bold'>Add Food Items</h2>
        </div>
        <div>
          <p className='text-lg font-semibold'>Upload Image</p>
          <div>
            <label htmlFor="image">
              <img src={image?URL.createObjectURL(image):assets.upload_area} className='w-[9rem] my-4' alt="" />
            </label>
            <input type="file" id='image' onChange={(e)=>setImage(e.target.files[0])} hidden required />
          </div>
        </div>
        <div>
          <p className='text-lg font-semibold'>Item Name</p>
          <input type="text" name='name' placeholder='Type Item Name' onChange={onChangeHandler} value={data.name} className='text-md my-2 border-2 border-solid border-slate-700 py-2 px-4 w-[40%]' />
        </div>
        <div>
          <p className='text-lg font-semibold'>Item Description</p>
          <textarea type="text" placeholder='Type Item Description' name='description' onChange={onChangeHandler} value={data.description} rows={5} cols={60} className='text-md my-2 border-2 border-solid border-slate-700 py-2 px-4 w-[40%]' ></textarea>
        </div>
        <div className='flex gap-6'>
          <div>
            <p className='text-lg font-semibold'>Item Category</p>
            <select name="category" id="" className='text-md border-2 border-solid border-slate-700 my-2 py-2 px-4 min-w-[90px] w-[150px]' onChange={onChangeHandler} value={data.category}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p className='text-lg font-semibold'>Item Price</p>
            <input type="text" name='price' placeholder='$20' onChange={onChangeHandler} value={data.price} className='text-md border-2 border-solid my-2 border-slate-700 py-2 px-4 w-[150px] min-w-[90px] '/>
          </div>
        </div>
        <div>
          <button className='text-md border-2 border-solid border-black bg-black text-white py-2 px-4 my-2 min-w-[14%]'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddItem