import React, { useCallback, useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function PlaceOrder() {
  const { getTotalCartAmount, food_list, URL, cartItems, token, payment, setPayment, setCartItems } = useContext(StoreContext);
  const [paymentPopUp, setPaymentPopUp] = useState(false)
  const navigate = useNavigate()

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    street:"",
    state:"",
    city:"",
    country:"",
    email:"",
    phoneNumber:"",
    zipCode:"",

  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setData({...data,[name]:value})
  }


  const placeOrder = async (event) =>{
    event.preventDefault()
   setPaymentPopUp(true)
   
  }

 

  const paymentHandler = useCallback(async () =>{
    try {
      console.log(payment);
      if(payment == true){
        let orderItems = []
      food_list.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+5,
        payment:payment
      }
  
      let response = await axios.post(URL+"/api/order/place", orderData, {headers:{token}})
      console.log(response);
      toast.success(response.data.message)
      setCartItems({})
      navigate("/myorders")
      } else {
        toast.error("Payment cancel")
      }
    } catch (error) {
      console.log(error);
    }
  }, [payment,setPayment])


  useEffect(() => {
    if(payment != null){
      paymentHandler();
    setPaymentPopUp(false);
    }
    if(!token){
      navigate("/cart")
    } else if(getTotalCartAmount()<=0){
      navigate("/cart")
    }
  }, [payment])
  

  const paymentTrue = () => {
    setPayment(true);
   
  };

  const paymentFalse = () => {
    setPayment(false);
  };



  return (

    <>
    <div>
    {paymentPopUp ? 
  <div className='absolute inset-0 w-screen h-screen bg-black opacity-95 overflow-y-hidden grid z-50'>
    <div className='p-8 max-w-[330px] sm:max-w-[23vw] border-2 border-solid border-[#ec3131] rounded-md bg-white place-self-center'>
      <div className='flex justify-between my-4'>
        <h2 className='font-bold text-xl'>Payment</h2>
        <img src={assets.cross_icon} alt="Close" className='cursor-pointer' onClick={() => setPaymentPopUp(false)} />
      </div>
      <div>
        <p>Do you want to make a payment?</p>
        <button className='p-2 my-2 cursor-pointer border-2 border-solid border-[#ec3131] bg-[#ec3131] text-white w-full text-lg rounded-md' onClick={paymentTrue}>Yes</button>
        <button className='p-2 my-2 cursor-pointer border-2 border-solid border-[#ec3131] bg-[#ec3131] text-white w-full text-lg rounded-md' onClick={paymentFalse}>No</button>
      </div>
    </div>
  </div> : null}

    </div>

    <form onSubmit={placeOrder} className="flex justify-between max-gap mx-4 my-[3rem]">
      <div className=" flex gap-[20px] flex-col px-6">
        <h2 className="text-4xl font-bold">Delivery Information</h2>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <input type="text" required name="firstName" value={data.firstName} onChange={onChangeHandler} placeholder="First Name" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
            <input type="text" required name="lastName" value={data.lastName} onChange={onChangeHandler} placeholder="Last Name" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          </div>
          <input type="text" required name="email" value={data.email} onChange={onChangeHandler} placeholder="Email Address" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          <input type="text" required name="street" value={data.street} onChange={onChangeHandler} placeholder="Street" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          <div className="flex gap-4">
            <input type="text" required name="city" value={data.city} onChange={onChangeHandler} placeholder="City" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
            <input type="text" required name="state" value={data.state} onChange={onChangeHandler} placeholder="State" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          </div>
          <div className="flex gap-4">
            <input type="text" required name="zipCode" value={data.zipCode} onChange={onChangeHandler} placeholder="Zip Code" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
            <input type="text" required name="country" value={data.country} onChange={onChangeHandler} placeholder="Country" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          </div>
          <input type="text" required name="phoneNumber" value={data.phoneNumber} onChange={onChangeHandler} placeholder="Phone" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
        </div>
      </div>
      <div className="flex-1">
        <div className=" flex justify-between gap-[20px] flex-col px-6">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div>
            <div className="flex justify-between">
              <p className="text-lg">SubTotal</p>
              {getTotalCartAmount() > 0 ? (
                <p>${getTotalCartAmount()}</p>
              ) : (
                <span>$0</span>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-lg">Delivery</p>
              {getTotalCartAmount() > 0 ? <p>${5}</p> : <span>$0</span>}
            </div>
            <div className="flex justify-between">
              <b className="text-lg">Total Amount</b>
              {getTotalCartAmount() > 0 ? (
                <b>${getTotalCartAmount() + 5}</b>
              ) : (
                <span>$0</span>
              )}
            </div>
          </div>
          <button type="submit" className="p-2 my-2 cursor-pointer border-2 border-solid border-[#ec3131] bg-[#ec3131] text-white w-[100%] text-lg rounded-md">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>



    </>
  );
}

export default PlaceOrder;
