import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Login from 'src/pages/Auth/Login'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import ProductsList from 'src/pages/ProductList'
import Profile from 'src/pages/Profile'
import { useAppContext } from 'src/contexts/app.context'
import AuthLayout from 'src/layouts/AuthLayout'

const ProtectedRoute = () => {
  const { isAuthenticated } = useAppContext()
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
const RejectedRoute = () => {
  const { isAuthenticated } = useAppContext()
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
export default function Routes() {
  const elementRoutes = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductsList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'user',
          element: <Profile />
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )
        }
      ]
    }
  ])
  return elementRoutes
}
