import React from 'react'
import AuthHeader from '../components/AuthHeader'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({ children }: any) => {
  return (
    <div className='py-16'>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
