import React from 'react'
import {cardValue} from "../constant/index";


const Card = () => {
  return (
    <div className='bg-white xs:my-3 w-full   my-8'>
      <div className='max-w-[1200px] mx-auto py-7 '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     {
         cardValue.map((items,index)=>(
            <div className='w-[200px] mx-auto border border-1 p-6 text-center rounded-md hover:shadow-none hover:scale-110 duration-300 shadow-md' key={index}>
              <img src={items.icon} className='w-10' alt="" />
              <p className='text-xl font-bold'>{items.title}</p>
              <p className='text-xl font-extrabold py-2'>{items.price}</p>
              <p className='font-semibold  border-b py-2 '>{items.storage}</p>
              <p className='font-semibold  border-b '>{items.user}</p>
              <p className='font-semibold border-b py-2'>{items.send}</p>
              <button className='mt-4  rounded-md bg-green-300 px-2 py-1  '>{items.btn}</button>
            </div>
          ))
     }
     </div>
      </div>
    </div>
  )
}

export default Card
