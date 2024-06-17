import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

  const [cartItems, setCartItems] = useState({})
  const [token, setToken] = useState("")
  const [food_list, setFood_list] = useState([])
  const [payment, setPayment] = useState(null)

  
  const URL = "http://localhost:4000"

  const fetchFood = async () =>{
    const response = await axios.get(`${URL}/api/food/list`)
    if(response.data.success){
    
      setFood_list(response.data.data)
    }else{
      toast.error(response.data.message)
    }
  }

 

  const addToCart = async (itemId) =>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
      await axios.post(URL+"/api/cart/add",{itemId},{headers:{token}})
      console.log("success")
    }
  }
  const removeToCart = async (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(token){
      await axios.post(URL+"/api/cart/remove",{itemId},{headers:{token}})
      console.log("success")
    }
  }

  const loadCartData = async (token) =>{
    const response = await axios.post(URL+"/api/cart/get", {} ,{headers:{token}})
    setCartItems(response.data.message)
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
        if (cartItems.hasOwnProperty(item) && cartItems[item] > 0) {

            // Ensure item is treated as the same type as product._id
            let itemInfo = food_list.find(product => product._id == item);  // Use '==' for loose equality to compare different types

            if (itemInfo && typeof(itemInfo.price) !== 'undefined') {
                totalAmount += itemInfo.price * cartItems[item];
            } else {
                console.warn(`Item with _id ${item} not found in food_list or has no price`, itemInfo);
            }
        }
    }
    return totalAmount;
};


  useEffect(() => {
    async function loadData(){
      
      let loginToken = localStorage.getItem("token")
      console.log(loginToken);
      if(loginToken){
        setToken(loginToken)
        await loadCartData(loginToken)
      }
      fetchFood()
    }

    loadData()
    
  }, [])
  
  

  const contextValue = {
    food_list,
    setCartItems,
    cartItems,
    addToCart,
    removeToCart,
    getTotalCartAmount,
    URL,
    token,
    setToken,
    payment,
    setPayment
  }

  return(
    <StoreContext.Provider value={contextValue} >
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider