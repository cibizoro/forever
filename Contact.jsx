import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Content = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title  text1={'Contact'} text2={'us'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>3/168A near umesh pencil company <br />  pollachi</p>
          <p className='text-gray-500'>TEL:6382987919<br />EMAIL:mailmecibi05@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at SCUMBAGS</p>
          <p className='text-gray-500'>Learn more about teams and job oppenings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-200'>
            explore jobs
          </button>

        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default Content