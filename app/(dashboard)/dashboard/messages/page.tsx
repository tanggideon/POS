import React from 'react'
import { MessageTable } from '../../(components)/MessagesTable'

const Messages = () => {
  return (
    <div className='flex-1 p-10'>
      <div className='flex-1 bg-gray-100 p-10 h-full'><MessageTable /></div>
    </div>
  )
}

export default Messages