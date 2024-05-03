import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Router, Routes } from 'react-router-dom'
import AddItem from './pages/AddItem/AddItem'
import ListItem from './pages/ListItem/ListItem'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr className='bg-slate-500 h-[2px]' />
      <div className='flex'>
        <div className='w-[18%]'>
        <Sidebar />
        </div>
        <div className='w-[100%]'>
        <Routes>
          <Route path='/' element={<AddItem url={url} />} />
          <Route path='/list' element={<ListItem url={url} />} />
          <Route path='/orders' element={<Order url={url} />} />
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App