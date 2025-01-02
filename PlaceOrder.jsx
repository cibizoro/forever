import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod]=useState('cod');

  const {navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/*  left side */}
      <div className='flex flex-col gap-4 w-full max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'}text2={'INFORMATION'}/>

        </div>
        <div className='flex gap-3'>
          <input  type='text' placeholder='first name' className='border border-gray rounded py-1.5 px-3.5 w-full'/>
          <input  type='text' placeholder='last name' className='border border-gray rounded py-1.5 px-3.5 w-full'/>

        </div>
        <input  type='email' placeholder='email adrress' className='border border-gray rounded py-1.5 px-3.5 w-full'/>
        <input  type='text' placeholder='street' className='border border-gray rounded py-1.5 px-3.5 w-full'/>
        <div className='flex gap-3'>
          <input  type='text' placeholder='city' className='border border-gray rounded py-1.5 px-3.5 w-full'/>
          <input  type='text' placeholder='state' className='border border-gray rounded py-1.5 px-3.5 w-full'/>
          

        </div>
        <div className='flex gap-3'>
          <input  type='number' placeholder='zip code' className='border border-gray rounded py-1.5 px-3.5 w-full'/>
          <input  type='text' placeholder='country' className='border border-gray rounded py-1.5 px-3.5 w-full'/>

        </div>
        <input  type='number' placeholder='phone' className='border border-gray rounded py-1.5 px-3.5 w-full'/>


      </div>
      {/* right side*/}
      <div className='mt-8'>
        <div className='mt-8 min-80'>
          <CartTotal />

        </div>
        <div className='mt-10'>
          <Title  text1={'PAYMENT'} text2={'METHOD'}/>
          <div className='flex gap-3 flex-col lg:flex-row'></div>
          <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}>


            </p>
            <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
          </div>
          <div  onClick={()=>setMethod('razorpay')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
            
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}>

            </p>
            <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            
          </div>
          <div  onClick={()=>setMethod('cod')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}> </p>

            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
          </div>
          <div className='w-full mt-8 text-end'>
            <button onClick={()=>navigate('/Orders')}className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default PlaceOrder