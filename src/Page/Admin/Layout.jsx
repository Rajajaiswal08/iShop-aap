import React from 'react'
import Sidebar from '../../Componet/Admin/Sidebar'
import Header from '../../Componet/admin/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Componet/admin/Footer'

export default function Layout() {
  return (
    <div className='grid grid-cols-6' >
        <Sidebar/>
        <div className='col-span-5' >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    </div>
  )
}
