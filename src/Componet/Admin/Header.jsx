import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

function Header() {
   
  

  return (
    <div className='w-full p-3 justify-end items-center text-center  gap-24 flex bg-white shadow'>
       <div className='flex gap-2'>
       <IoLogOutOutline className='text-2xl'/>
          <span className=''>Logout</span>
       </div>
<CgProfile className='text-xl'/>
    </div>
  )
}

export default Header
