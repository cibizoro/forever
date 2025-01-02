import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    const{currency,deliverfee,getCartAmount}=useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'}/>

             
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>SUB TOTAL</p>
                <p>{currency} {getCartAmount()}.00</p>



            </div>
            <hr />
            <div className='flex justify-between'>
                <p>SHIPPING FEE</p>
                <p>{currency} {deliverfee}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>TOTAL</b>
                <b>{currency}{getCartAmount()===0 ? 0 :getCartAmount()+deliverfee}</b>
            </div>

        </div>

    </div>
  )
}

export default CartTotal