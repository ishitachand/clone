import React from 'react'
import Navbar from './components/Navb'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
