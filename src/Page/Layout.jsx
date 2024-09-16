import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Componet/WEbsite/Header'
import Footer from '../Componet/WEbsite/Footer'
import Productdata from '../Componet/WEbsite/Productdata'
import Whatsab from '../Componet/WEbsite/Whatsab'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Whatsab/>
        <Footer/>
    </div>
  )
}

export default Layout