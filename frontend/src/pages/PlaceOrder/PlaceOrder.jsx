import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form action="" className="flex justify-between max-gap mx-4 my-[3rem]">
      <div className=" flex gap-[20px] flex-col px-6">
        <h2 className="text-4xl font-bold">Delivery Information</h2>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
            <input type="text" placeholder="Last Name" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          </div>
          <input type="text" placeholder="Email Address" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          <input type="text" placeholder="Street" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          <div className="flex gap-4">
            <input type="text" placeholder="City" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
            <input type="text" placeholder="State" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          </div>
          <div className="flex gap-4">
            <input type="text" placeholder="Zip Code" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
            <input type="text" placeholder="Country" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
          </div>
          <input type="text" placeholder="Phone" className="p-4 w-[100%] text-lg rounded-md bg-transparent border-2 border-solid border-slate-600" />
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
          <button className="p-2 my-2 cursor-pointer border-2 border-solid border-orange-700 bg-orange-700 text-white w-[100%] text-lg rounded-md">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
