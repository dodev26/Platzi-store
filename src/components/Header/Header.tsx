import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from 'src/contexts/app.context'
import { clearLS } from 'src/utils/lsapi'

const Header = () => {
  const { reset, isAuthenticated } = useAppContext()
  const handleLogout = () => {
    reset()
    clearLS()
  }
  return (
    <div className='h-[178px] w-full'>
      <div className='container'>
        <div className='flex w-full items-center justify-between py-4'>
          <ul className='flex items-center gap-x-[33px] text-xs'>
            <li className='text-green'>Chat with us</li>
            <li>+84 966 529 474</li>
            <li>phanduongngocdo@gmail.com</li>
          </ul>
          <ul className='flex items-center gap-x-[38px] text-xs'>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex  h-[130px] items-center justify-between'>
          <div className='text-2xl font-bold'>
            <Link to='/'>
              <div className='flex items-center gap-x-3'>
                <svg width={40} height={40} fill='#98ca3f' viewBox='0 0 24 24'>
                  <path d='M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z' />
                </svg>
                Platzi Store
              </div>
            </Link>
          </div>
          <div className='flex h-[42px] w-[500px] items-center rounded-xl border  border-Dgrey py-[11.5px] px-[16px] outline-none'>
            <input
              placeholder='Search Products, categories ...'
              className='w-full border-none text-[14px] font-[400] leading-[19px] text-Agrey outline-none'
              type='text'
            />
          </div>
          {isAuthenticated ? (
            <div className='flex items-center justify-center gap-x-[43px]'>
              <a href='/' className='cursor-pointer transition-colors hover:text-blue-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                  />
                </svg>
              </a>
              <a href='/cart' className='cursor-pointer transition-colors hover:text-green'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
              </a>
              <button
                type='button'
                className='cursor-pointer transition-colors hover:text-red-700'
                onClick={handleLogout}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                  />
                </svg>
              </button>
            </div>
          ) : (
            <Link to='/login' className='text-sm font-light transition-colors hover:text-green'>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
