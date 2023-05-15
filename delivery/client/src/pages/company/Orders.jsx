import React from 'react'
import { Header, OrdersTable, Sidebar } from './../../components'

const Orders = () => {
  return (
    
    
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl h-screen">
      <div className='flex space-between mx-auto my-auto pt-20'>

        <Header category="Page" title="Orders" />
      </div>
        <OrdersTable />
    </div>
    
  )
}

export default Orders