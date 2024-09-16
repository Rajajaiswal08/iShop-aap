import React, { useState } from 'react'

function CartData({imges,price,rate}) {
   const[count, setCount]=useState(1)


   const inc =()=>{
    setCount(count +1)
   }

   const dec =()=>{
    if (count > 1) {
        setCount(count - 1);
      }
   }

  return (
 
    <div className='w-full mx-auto'>
    <div className='flex max-w-[1190px] mx-auto flex-col md:flex-row justify-between items-center px-4 py-4 bg-white shadow-lg rounded-lg'>
      <div className='w-full md:w-2/4 flex gap-4 items-center p-4'>
        <div className='text-[#33A0FF] bg-[#F6F7F8] rounded-md hover:bg-green-600 px-2 py-1 cursor-pointer'>x</div>
        <img src={imges} alt="" className='w-16 h-16 object-cover md:w-24 md:h-24'/>
        <div className='text-lg md:text-xl font-semibold text-gray-700'>{rate}</div>
      </div>
  
      <div className='w-full md:w-auto flex gap-8 items-center mt-4 md:mt-0'>
        <span className='text-lg md:text-xl font-semibold text-gray-700 hidden sm:block'>${price}</span>  
        <div className='flex items-center gap-8 md:gap-16 mx-auto'>
          <div className='flex'>
            <button 
              onClick={dec} 
              className='text-[#33A0FF] bg-[#F6F7F8] px-3 py-2 rounded-md hover:bg-red-600'>
              -
            </button>
            <span className='text-lg font-medium bg-[#F6F7F8] px-4 py-2'>{count}</span>
            <button 
              onClick={inc} 
              className='text-[#33A0FF] bg-[#F6F7F8] px-3 py-2 rounded-md hover:bg-green-600'>
              +
            </button>
          </div>
          <span className='text-lg md:text-xl font-semibold text-gray-700'>${price * count}</span>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default CartData;