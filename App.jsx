import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Footer from './components/Footer'
import PlaceOrder from './pages/PlaceOrder';
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function App (){
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9w]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/product/:productid' element={<Product/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />

      </Routes>
      <Footer />

    </div>
  )
}

export default App
