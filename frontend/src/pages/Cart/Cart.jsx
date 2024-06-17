import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeToCart, food_list, getTotalCartAmount, URL } = useContext(StoreContext);
  const navigate = useNavigate()

  let itemPrice = getTotalCartAmount()

  console.log(itemPrice);

  return (
    <div>
      <div className="my-[3.5rem]">
        <div className="grid grid-cols-6 justify-items-center items-center">
          <p className="text-xl font-bold">Item</p>
          <p className="text-xl font-bold">Title</p>
          <p className="text-xl font-bold">Price</p>
          <p className="text-xl font-bold">Quantity</p>
          <p className="text-xl font-bold">Total</p>
          <p className="text-xl font-bold">Remove</p>
        </div>
        <br />
        <hr className="h-[2px] bg-gray-600 " />
        <div className="mb-[5rem]">
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="grid grid-cols-6 justify-items-center items-center my-3">
                    <img
                      src={`${URL}/images/`+item.image}
                      className="w-[85px] rounded-xl"
                      alt=""
                    />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <img
                      src={assets.cross_icon}
                      alt=""
                      onClick={() => {
                        removeToCart(item._id);
                      }}
                      className="w-[10px] cursor-pointer "
                    />
                  </div>
                  <hr className="h-[2px] bg-gray-600 " />
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-between max-gap mx-4">
          <div className="flex-1 flex justify-between gap-[20px] flex-col px-6">
            <h2 className="text-2xl font-bold">Cart Totals</h2>
            <div>
              <div className="flex justify-between">
                <p className="text-lg">SubTotal</p>
                {itemPrice > 0 ? (
                  <p>${itemPrice}</p>
                ) : (
                  <span>$0</span>
                )}
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Delivery</p>
                {itemPrice > 0 ? (
                  <p>${5}</p>
                ) : (
                  <span>$0</span>
                )}
              </div>
              <div className="flex justify-between">
                <b className="text-lg">Total Amount</b>
                {itemPrice > 0 ? (
                  <b>${itemPrice + 5}</b>
                ) : (
                  <span>$0</span>
                )}
              </div>
            </div>
            <button className="p-2 my-2 cursor-pointer border-2 border-solid border-orange-700 bg-orange-700 text-white w-[100%] text-lg rounded-md" onClick={()=>navigate("/placeorder")}>
              Proceed to Checkout
            </button>
          </div>
          <div className="flex flex-col gap-4 ">
            <p>If you have a promo code, Enter it</p>
            <div className="bg-gray-500">
              <input
                type="text"
                placeholder="Enter Promo Code"
                className="pl-[10px] bg-transparent border-none outline-none text-lg"
              />
              <button className="px-6 py-4 bg-black cursor-pointer text-white text-lg ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
