import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
          <div className='text-2xl font-bold'>Fake-Store</div>
          <div className='flex h-[42px] w-[500px] items-center rounded-xl border  border-Dgrey py-[11.5px] px-[16px] outline-none'>
            <input
              placeholder='Search Products, categories ...'
              className='w-full border-none text-[14px] font-[400] leading-[19px] text-Agrey outline-none'
              type='text'
            />
          </div>
          <div className='flex items-center justify-center gap-x-[43px]'>
            <a href='/'>
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
            <a href='/cart'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
