import React, { useState } from "react";
import { Navbar } from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./component/Footer/Footer";
import './App.css'
import LoginPopup from "./component/LoginPopup/LoginPopup";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MyOrder from "./pages/MyOrder/MyOrder";
import Search from "./component/Search/Search";
import Menu from "./pages/Menu/Menu";

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showSearch, setShowSearch] = useState(false)


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    {showSearch?<Search setShowSearch={setShowSearch} />:<></>}
      <div className=" max-w-[100%] md:max-w-[1280px] m-auto">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} setShowSearch={setShowSearch} />
       <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrder />} />
          <Route path="/dishes" element={<Menu />} />
        </Routes>
       </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
