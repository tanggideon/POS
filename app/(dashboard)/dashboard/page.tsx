import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex-1 p-10 grid grid-cols-4 grid-rows-5 gap-5'>
      <div className='bg-gray-100'>
        <div className='flex-1 h-full flex flex-col px-10 justify-center'>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-2xl'>Gh₵ 25,000.00</span>
            <span className='font-semibold text-sm text-gray-500'>Total Sales Today</span>
          </div>
        </div>
        <div className='flex-1 h-1 bg-green-400'/>
      </div>
      <div className='bg-gray-100'>
        <div className='flex-1 h-full flex flex-col px-10 justify-center'>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-2xl'>Gh₵ 125,000.00</span>
            <span className='font-semibold text-sm text-gray-500'>Sales for last Six Months</span>
          </div>
        </div>
        <div className='flex-1 h-1 bg-red-400'/>
      </div>
      <div className='bg-gray-100'>
        <div className='flex-1 h-full flex flex-col px-10 justify-center'>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-2xl'>Gh₵ 225,000.00</span>
            <span className='font-semibold text-sm text-gray-500'>Current Stock Value</span>
          </div>
        </div>
        <div className='flex-1 h-1 bg-blue-400'/>
      </div>
      <div className='bg-gray-100'>
        <div className='flex-1 h-full flex flex-col px-10 justify-center'>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-2xl'>Gh₵ 2500.00</span>
            <span className='font-semibold text-sm text-gray-500'>Av. Daily Sales</span>
          </div>
        </div>
        <div className='flex-1 h-1 bg-yellow-400'/>
      </div>
      <div className='col-span-3 row-span-4 bg-gray-100'></div>
      <div className='row-span-4 bg-gray-100'></div>
    </div>
  )
}

export default Dashboard