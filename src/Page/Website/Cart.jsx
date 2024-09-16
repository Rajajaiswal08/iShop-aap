import React from 'react'
import CartData from '../../Addata/CartData'
import TottleData from '../../Addata/TottleData'
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className='w-full mx-auto'>
      <div className='bg-[#F6F7F8] text-[#22262A] border-2 flex items-center justify-center text-center'>
   Cart
</div>

      
    <div className=' mt-6 mb-4 '>
     <CartData imges="images/13.png" price="359" rate="chor bajar ka lap top"/><br />
     <CartData imges="images/14.png" price="499" rate="iphone mac pro"/><br />
     <CartData imges="images/02.png" price="1099" rate="smart wotch"/><br />
    </div>

    <div className="max-w-[1190px] flex flex-col md:flex-row justify-between mx-auto mt-7">
  <div className="flex w-full md:w-auto max-w-sm mx-auto h-[50px]">
    <input
      type="text"
      placeholder="Voucher code"
      className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none"
    />
    <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600">
      Redeem
    </button>
  </div>
  <div className="w-full md:w-[500px] mt-4 md:mt-0 p-4">
    <TottleData />
  </div>
  
</div>

<div className="flex w-full md:w-auto max-w-sm mx-auto h-[50px]">
    <input
      type="text"
      placeholder="click here"
      className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none"
    />
    <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600">
      <Link to={'/'}>
      back to home
      </Link>
    </button>
  </div>
      
    </div>
  )
}

export default Cart