import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { assets } from '../../assets/assets'


const Order = ({url}) => {

  const [data, setData] = useState([])
  const [statusData, setStatusData] = useState({})

  const fetchOrders = async () =>{
    const response = await axios.get(`${url}/api/order/listorder`)
    if(response.data.success){
      console.log(response.data.data);
      setData(response.data.data)
    }
  }

  const onChangeHandler = async (orderId, event) =>{

    try {
      let link = url + "/api/order/updatestatus"

    let orderStatus = event.target.value
    setStatusData(
      orderStatus
    )

    const response = await axios.post(link,{_id:orderId,status:orderStatus})
    if(response.data.success){
      await fetchOrders()
      
    }
    } catch (error) {
      console.log(error);
    }
    

  }

  useEffect(() => {
    
    fetchOrders()
    
  }, [])
  

  return (
    <div>
      <div className='w-[80vw] m-auto'>
        <h1 className='text-3xl font-sans font-bold'>Orders</h1>
        <div className=' my-6 text-center'>
          {data.map((order,index)=>{
            return ( <div key={index} className='grid grid-cols-5 items-center justify-center my-4 px-2 py-4 border-solid border-[#ec3131] border-2 rounded-md'>
              <img src={assets.parcel_icon} className='w-[80px]' alt="" />
              <p >{order.items.map((item,index)=>{
                 if(index === order.items.length-1){
                  return item.name + " x " + item.quantity
                } else {
                  return item.name + " x " + item.quantity + " | "
                }
              })}</p>
              <p className='ml-8'>${order.amount}</p>
              <p>items : {order.items.length}</p>
              <select className='px-1 py-3 border-solid border-[#ec3131] border-2 rounded-md outline-none hover:bg-[#ec3131]  transition-all' onChange={()=>{onChangeHandler(order._id, event)}}  value={order.status}> 
                <option value="Food Processing">Food Processing</option>
                <option value="Out of Delivery">Out of Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              
              <div className='my-4'>
              <h3 className='text-3xl font-sans font-bold my-2'>Address</h3>
              <div className='flex flex-col md:flex-row gap-12'>
                <div>
                <p className='flex'>{order.address.firstName} {order.address.lastName}</p>
                <p>{order.address.phoneNumber}</p>
                </div>
                <div>
                <p>{order.address.email}</p>
                <p>{order.address.street}, {order.address.state},{order.address.city} </p>
                </div>
              </div>
              </div>

            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Order