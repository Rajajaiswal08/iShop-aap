import React from 'react'
import Profile from '../../Addata/Profile'

function MyProfile() {
  return (
    <div>
      <div className='w-full mx-auto'>
        <div className='max-w-[1190px] mx-auto '>
          <Profile/>

          <div className='p-3 text-[#fb197d] bg-[#F6F7F8] flex justify-center  hover:text-red-600'>
          ____CONTACT US____
          </div>
          <div className='p-[60px] h-[200px] flex justify-center items-center md:text-[40px] text-[16px]'>
  <p>GET IN TOUCH ANY TIME WITH 
  <b className='text-[#fb197d]'>AVES ishop AGENCY</b></p>
</div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile