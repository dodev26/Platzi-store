import React from 'react'
import { Link } from 'react-router-dom'

const AuthHeader = () => {
  return (
    <div className='h-[178px] w-full   px-[45px]'>
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
      <div className='flex  h-[130px] items-center justify-center'>
        <div className='text-2xl font-bold'>Fake-Store</div>
      </div>
    </div>
  )
}

export default AuthHeader
