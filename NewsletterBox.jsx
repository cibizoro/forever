import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();


    }
  return (
    <div className='text-center font-medium text-gray-700'>
        <p className='text-2xl font-medium text-gray-800'>
            subscribe and get 20% offer price 
        </p>
        <p className='text-gray-700 mt-3'>
            subscribe and be a member of our community and get 20% offer price

        </p>
        <form onSubmit={onSubmitHandler}className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter your email' required />
            <button type='submiyt' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox