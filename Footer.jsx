import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text:sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quia cupiditate, totam quasi voluptates id inventore assumenda enim facilis quae pariatur odio dolorem! Voluptatibus officia magnam a similique cumque ad.

            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
                Comapny
            </p>
            <ul className='flex flex-col text-gray-600'>
                     <li>HOME</li>
                     <li>ABOUT</li>
                     <li>DELIVERY</li>
                     <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div >
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col text-gray-600'>
                <li>6382987919</li>
                <li>abcdefg@gmail.com</li>
                <li>Instagram</li>
                

            </ul>
        </div>
    </div>
  ) 
}

export default Footer