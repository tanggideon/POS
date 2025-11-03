import React from 'react'

const Home = () => {
  return (
    <div className='flex-1 w-full h-[100vh] bg-[url(/assets/images/background1.jpg)] bg-cover bg-no-repeat'>
      <div className='flex-1 h-[calc(100vh-5rem)] flex flex-col items-center justify-center p-4'>
        <div className='w-full md:w-1/3 bg-white h-[90%] shadow-lg'></div>
      </div>
      <div className='w-full h-20 bg-black bg-opacity-50 text-white flex items-center justify-center'>
        <span>
          &copy; {new Date().getFullYear()} Powered by T&N Digital. All rights reserved.
        </span>
      </div>
    </div>
  )
}

export default Home