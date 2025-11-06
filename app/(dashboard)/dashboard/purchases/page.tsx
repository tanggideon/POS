import React from 'react'
import { SalesPurchaseTable } from '../../(components)/SalesPurchaseTable'
import { ProductTableData } from '@/lib/constants'

const SalesAndPerformance = () => {
  return (
    <div className='flex-1 p-10 h-full'>
      <div className='flex-1 h-full bg-gray-100 grid grid-cols-3 grid-rows-4 gap-5 p-10'>
        <div className="col-span-2 row-span-2 bg-white"></div>
        <div className="row-span-2 bg-white"></div>
        <div className="col-span-3 bg-white row-span-2">
          <SalesPurchaseTable data={ProductTableData}/>
        </div>
      </div>
    </div>
  )
}

export default SalesAndPerformance