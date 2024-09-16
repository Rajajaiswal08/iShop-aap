import React from 'react'
import Productdata from '../../Componet/WEbsite/Productdata'
import PriceRange from '../../Addata/PriceRange'
import ColorSelector from '../../Addata/ColorSelector'

function Chakout() {
  return (
    <div>
       <div className='w-full mx-auto'> 
       <div className='bg-[#F6F7F8] text-[#22262A] border-2 flex items-center justify-center text-center'>
    <span className='text-[#33A0FF] font-semibold'> Store / Acceosories</span>
</div>
          <div className='max-w-[1190px] mx-auto flex flex-col md:flex-row items-center overflow-hidden'>
              <div className='md:w-[30%] w-[100%] mt-6 md:mt-0'>
              <div className=" bg-white p-4 shadow rounded-lg">
  <h2 className="text-lg font-semibold mb-4">ACCESSORIES</h2>
  <ul className="space-y-2">
    <li className="flex justify-between text-gray-700 hover:text-blue-500 p-2 rounded-lg">
      <span>Apple Car</span>
      <span>2</span>
    </li>
    <li className="flex justify-between  font-semibold hover:text-blue-500 p-2 rounded-lg">
      <span>Air port & wireless</span>
      <span>48</span>
    </li>
    <li className="flex justify-between text-gray-700 hover:text-blue-500 p-2 rounded-lg">
      <span>Cables & Docks</span>
      <span>14</span>
    </li>
    <li className="flex justify-between text-gray-700 hover:text-blue-500 p-2 rounded-lg">
      <span>Cases & Films</span>
      <span>15</span>
    </li>
    <li className="flex justify-between text-gray-700 hover:text-blue-500 p-2 rounded-lg">
      <span>Charging Devices</span>
      <span>23</span>
    </li>
    <li className="flex justify-between text-gray-700 hover:text-blue-500 p-2 rounded-lg">
      <span>Connected home</span>
      <span>1</span>
    </li>
    <li className="flex justify-between text-gray-700 hover:text-blue-500 p-2 rounded-lg">
      <span>Headphones</span>
      <span>95</span>
    </li>
  </ul>
</div>

              </div>
              <div className='md:w-[70%] mt-6 md:mt-0'>
              <div className='w-full mx-auto bg-[#2E90E5]'>
          <div className="max-w-[1190px] mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-[50%] p-6 md:p-10 leading-8 md:leading-10 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl text-white">iPhone 6 Plus</h1>
              <p className="text-white mt-6 md:mt-8 text-lg md:text-xl">
                Performance and design. Taken right to the edge.
              </p>
              <div className="text-white mt-4 md:mt-5 cursor-pointer">SHOP NOW</div>
            </div>
            <div className="md:w-[50%] mt-6 md:mt-0">
              <img src="images/22.png" alt="Phone" className="mx-auto" />
            </div>
          </div>
        </div>
              </div>


          </div>

          <div className='max-w-[1190px] mx-auto flex flex-col md:flex-row mt-6 px-4 '>
  <div className='w-full md:w-1/4 mt-9'>
    <PriceRange />
    <ColorSelector />
  </div>
  <div className='w-full md:w-3/4 md:p-1 p-7'>
    <Productdata />
  </div>
</div>

         </div>
    </div>
  )
}

export default Chakout