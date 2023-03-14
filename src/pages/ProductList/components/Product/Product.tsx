import React from 'react'

const Product = () => {
  return (
    <div className='rounded-xl border border-Dgrey px-4 pt-4 pb-5'>
      <img
        src='https://images.unsplash.com/photo-1678680081129-17f2ac502d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        className='h-[180px] max-h-[180px] w-full rounded-xl object-cover'
        alt=''
      />
      <div className='mt-4'>
        <h3 className='text-[15px] font-[500] leading-[23px]'>Product Title</h3>
        <p className='mt-[4px] max-h-[16px] w-full truncate text-xs font-[400] leading-[16px] text-grey57'>
          Space for a small product description
        </p>
        <div className='mt-3 flex items-center gap-x-[4.61px]'>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <svg
                key={index}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-4 w-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
            ))}
        </div>
        <div className='mt-3 flex items-center justify-between'>
          <div className='font-[600]'>
            <span className='block text-lg leading-[27px]'>36.99 USD</span>
            <span className='block text-xs leading-[18px] text-Agrey line-through'>48.56</span>
          </div>
          <button className='flex items-center justify-center rounded-xl border-2 border-greenSecond bg-green px-[10px] py-[4.5px] text-white'>
            <span className='text-[15px] font-[700] leading-[23px] text-white'>Buy now</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
