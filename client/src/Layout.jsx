import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function Layout() {
  return (
    <>
    <ScrollToTop />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout