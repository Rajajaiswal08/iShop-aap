import React from 'react'
import Context from './Context'

function Profile() {
  return (
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
    <Context/>
  </div>
  )
}

export default Profile