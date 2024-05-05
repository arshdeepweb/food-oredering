import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

  const [cartItems, setCartItems] = useState({})
  const [token, setToken] = useState("")
  const [food_list, setFood_list] = useState([])


  const fetchFood = async () =>{
    const response = await axios.get(`${URL}/api/food/list`)
    console.log(response)
    if(response.data.success){
      console.log(response.data)
      setFood_list(response.data.data)
    }else{
      toast.error(response.data.message)
    }
  }

 

  const addToCart = (itemId) =>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(let item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount;
  }

  useEffect(() => {
    
    if(localStorage.getItem(token)){
      
    }
    fetchFood()
    
  }, [])
  
  
  const URL = "http://localhost:4000"

  const contextValue = {
    food_list,
    setCartItems,
    cartItems,
    addToCart,
    removeToCart,
    getTotalCartAmount,
    URL,
    token,
    setToken
  }

  return(
    <StoreContext.Provider value={contextValue} >
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider