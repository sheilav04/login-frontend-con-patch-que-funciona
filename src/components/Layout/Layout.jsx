import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../pages/Header/Header'
import { Footer } from '../../pages/Footer/Footer'

export const Layout = () => {
  const [token, setToken] = useState()

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
