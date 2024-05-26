import React from 'react'
import computer from "../assets/computer.png";
const Manage = () => {
  return (
    <div className='text-white  w-full bg-white flex justify-center md:py-[100px]'>
      <div className="flex justify-evenly  max-w-[1200px]">
        <div className='grid grid-cols-1 px-10  md:grid-cols-2'>
          <div className="img text-black flex flex-col justify-center items-start px-4 sm:mt-[0px]    mt-[50px]">
           <p className=' font-bold text-sky-500'>DATA ANALYTICS DASHBOARDS</p>
           <h2 className='text-2xl font-bold'>Manage Data Analytics Centerally</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis, animi exercitationem unde, at iste facere vero similique cupiditate dolorem dignissimos! Sed, voluptatem qui praesentium suscipit quibusdam dolor culpa fugit illum assumenda esse cupiditate magni rerum doloremque, nemo fugiat doloribus?</p>
           <button className='my-2  bg-black text-white p-3 rounded-full '>Get started</button>
          </div>
          <div className="img flex justify-center  sm:mt-[0px]    mt-[50px]">
            <img src={computer} width={350} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage
