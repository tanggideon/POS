import React from 'react'
import { ProductTable } from '../../(components)/DataTable'
import { ProductTableData } from '@/lib/constants'

const Products = () => {
  return (
    <div className='flex-1 p-10'>
          <div className='flex-1 bg-gray-100 p-10 h-full'><ProductTable data={ProductTableData} /></div>
        </div>
  )
}

export default Products