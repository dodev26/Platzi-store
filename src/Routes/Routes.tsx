import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from 'src/pages/Auth/Login'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

export default function Routes() {
  const elementRoutes = useRoutes([
    {
      path: '/login',
      element: (
        <MainLayout>
          <Login />
        </MainLayout>
      )
    }
  ])
  return elementRoutes
}
