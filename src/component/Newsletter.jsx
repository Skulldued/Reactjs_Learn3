import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full sm:my-10 my-10 '>
    <div className='grid px-10  grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto '>
        <div className='left-newletter '>
           <h1 className='text-3xl font-bold text-white py-2 px-2 sm:px-0 xs:text-center'>Want tips & tricks to optimise your flow?</h1>
           <p className='text-white text-xl sm:px-0 px-3'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='text-white flex flex-col  items-center sm:py-2 py-5'>
          <div className='md:flex md:flex-col md:justify-center w-full lg:flex lg:flex-row'>
          <input type="email" placeholder='Enter Your Email' className='p-2 rounded-md  mr-4 md:mb-6' />
         <a href="" className='text-white bg-green-400 h-[40px] flex justify-center items-center p-5 rounded-md'><button>Know More</button></a>
          </div>
          <div className='my-8 '>
            <p>We care bout the protextion of your data .Read our  </p>
            <a href='' className='text-green-600 font-bold '>privacy policy</a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Newsletter
