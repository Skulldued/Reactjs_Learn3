import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='text-white'>
         <div className='max-w-[800px]  mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='uppercase text-2xl text-blue-400 font-bold p-2'>Growing Withdata analytics</p>
          <h2 className='md:my-3 md:text-[45px] sm:text-[30px] text-[30px] font-extrabold '>GROW WITH DATA</h2>
          <div className='flex justify-center gap-4 items-center'>
            <p className='md:text-3xl sm:text-2xl text-xl '>Fast,Flexible,financing for </p>
            <ReactTyped 
             className='md:text-3xl sm:text-2xl text-xl '
             strings={[
              "BTB",
              "BTC",
              "SASS",
            ]}

            typeSpeed={120}
            backSpeed={140}
            loop

             />
          </div>
          <p className='md:py-5 py-3 text-zinc-400 font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil, quas aut ratione odio saepe.</p>
          <button className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[200px] mx-auto py-2 rounded-md'>Know More</button>
         </div>
        
    </div>
  )
}

export default Hero
