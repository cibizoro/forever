import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>
                easy exchange property is available for our customers
            </p>
            <p className='text-gray-400'> we offer our customers a free exchange policy</p>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>
                7 days retun policy
            </p>
            <p className='text-gray-400'> we provide 7 days free return policy</p>
            <img src={assets.support_img} className='w-10 m-auto mb-5' alt="" />
            <p className='font-semibold'>
                we support our customers a good customer service
            </p>
            <p className='text-gray-400'> we offer our customers a 24/7 customer service provider</p>
        </div>
    </div>
  )
}

export default OurPolicy