import React from 'react'
import Product from './components/Product'

const ProductsList = () => {
  return (
    <div className='grid grid-cols-12 gap-x-[32px] gap-y-[48px]'>
      <div className='col-span-4'>
        <Product />
      </div>
      <div className='col-span-4'>
        <Product />
      </div>
      <div className='col-span-4'>
        <Product />
      </div>
      <div className='col-span-4'>
        <Product />
      </div>
      <div className='col-span-4'>
        <Product />
      </div>
      <div className='col-span-4'>
        <Product />
      </div>
      <div className='col-span-4'>
        <Product />
      </div>
    </div>
  )
}

export default ProductsList
