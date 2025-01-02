import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'ABOUT'}text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'> 
        <img  className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi commodi amet sint ut. Incidunt consequatur tenetur rerum quo amet delectus ratione necessitatibus quia, veritatis non ipsa ad voluptate sapiente tempore.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quibusdam debitis quod quo voluptates maxime, dolorem eligendi ratione molestiae iste temporibus. Atque quaerat dolorum fugit eaque ratione officiis corporis. Blanditiis!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis possimus suscipit rerum distinctio commodi perspiciatis, atque libero quidem doloribus vero unde sit, expedita consectetur omnis tempora reiciendis adipisci a ex.</p>
        </div>
        

        
        

      </div>
      <div className='text-4xl py-4'>
        <Title  text1={'why'} text2={'choose us'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-colv gap-5'>
          <b>Quality assurance:</b>
          <p className='text-gray-600'>we provide each product a good and super products for our customers</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-colv gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>we provide our customer a good Convinience</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-colv gap-5'>
          <b>Exceptional customer service:  </b>
          <p className='text-gray-600'>we provide a good Exceptional customer service</p>
      </div>



      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About