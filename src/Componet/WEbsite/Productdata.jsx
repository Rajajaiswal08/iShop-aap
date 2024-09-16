import React from 'react'
import Product from '../../Page/Website/Product'

function Productdata() {
  return (
    <div>
              <div className='max-w-[1190px] mx-auto px-4'>
          <div className='text-center p-2 text-lg'>
            <b className='' style={{ color: '#22262A' }}>Best Seller</b>
          </div>
          <div className='w-full sm:w-[400px] mx-auto flex text-center justify-between'>
            <p className='hover:text-blue-700 hover:border-b-2 hover:border-blue-500 cursor-pointer'>All</p>
            <p className='hover:text-blue-700 hover:border-b-2 hover:border-blue-500 cursor-pointer'>Mac</p>
            <p className='hover:text-blue-700 hover:border-b-2 hover:border-blue-500 cursor-pointer'>iPhone</p>
            <p className='hover:text-blue-700 hover:border-b-2 hover:border-blue-500 cursor-pointer'>iPad</p>
            <p className='hover:text-blue-700 hover:border-b-2 hover:border-blue-500 cursor-pointer'>Accessories</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-3'>
            <Product imges="images/11.png" title="Apple Macbook" />
            <Product imges="images/12.png" title="Apple MacBook Pro" />
            <Product imges="images/13.png" title="Apple MacBook Air" />
            <Product imges="images/14.png" title="Apple iPhone 11" />
            <Product imges="images/15.png" title="Apple MacBook Pro" />
            <Product imges="images/16.png" title="Apple iPad" />
            <Product imges="images/17.png" title="Apple Watch 21-1" />
            <Product imges="images/18.png" title="Apple iPod 2A" />
          </div>

          <div className='text-blue-900 hover:border-blue-500 cursor-pointer font-semibold text-center p-3'>
            Load More
          </div>
        </div>
    </div>
  )
}

export default Productdata