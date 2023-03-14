import React from 'react'

const AsideBar = () => {
  return (
    <div className='w-full'>
      <div>
        <h2 className='text-lg font-semibold leading-[27px]'>Categories</h2>
        <ul className='mt-4 flex flex-col items-start gap-y-3 truncate pr-[38px] text-[14px] leading-[19px] text-black'>
          <li>CategoryCate</li>
          <li>Category name</li>
          <li>Category name</li>
          <li>Category name</li>
        </ul>
      </div>
      <div className='mt-12'>
        <h2 className='text-lg font-semibold leading-[27px]'>Price</h2>
        <form className='mt-4'>
          <div className='flex items-center gap-x-[14px]'>
            <div>
              <label htmlFor='#' className='text-xs font-semibold leading-[18px] text-black'>
                Min
              </label>
              <input
                type='text'
                className='w-[109px] rounded-xl border border-Dgrey bg-Fgrey py-[11.5px] px-[18.5px] text-[14px] font-normal leading-[19px] text-Agrey'
                placeholder='000'
              />
            </div>
            <span className='mt-[24px] font-[14px] text-Agrey'>-</span>
            <div>
              <label htmlFor='#' className='text-xs font-semibold leading-[18px] text-black'>
                Max
              </label>
              <input
                type='text'
                className='w-[109px] rounded-xl border border-Dgrey bg-Fgrey py-[11.5px] px-[18.5px] text-[14px] font-normal leading-[19px] text-Agrey'
                placeholder='000'
              />
            </div>
          </div>
          <div className='mt-[31px] flex items-center'>
            <button className='mr-[34px] rounded-xl border-2 border-green bg-green px-[14px] py-[10.5px]'>
              <span className=' text-[15px] font-[700] leading-[22.5px] text-white'>Apply</span>
            </button>
            <button>
              <span className=' text-[15px] font-[700] leading-[22.5px] text-Agrey'>Reset</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AsideBar
