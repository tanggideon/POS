import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex-1 p-10 grid grid-cols-4 grid-rows-5 gap-5'>
      <div className='bg-gray-200'></div>
      <div className='bg-gray-200'></div>
      <div className='bg-gray-200'></div>
      <div className='bg-gray-200'></div>
      <div className='col-span-3 row-span-4 bg-gray-200'></div>
      <div className='row-span-4 bg-gray-200'></div>
    </div>
  )
}

export default Dashboard