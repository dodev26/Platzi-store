import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header/Header'
import AsideBar from './components'

interface ILayout {
  children: React.ReactNode
}

const MainLayout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div className='py-16'>
        <div className='container'>
          <div className='flex justify-start'>
            <div className='mr-[34.04px] w-[267px] flex-shrink-0'>
              <AsideBar />
            </div>
            <div className='w-full'>{children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MainLayout
