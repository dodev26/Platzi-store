import React from 'react'
import AuthHeader from './AuthHeader'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'

const AuthLayout = ({ children }: any) => {
  return (
    <>
      <AuthHeader />
      {children}
      <Footer />
    </>
  )
}

export default AuthLayout
