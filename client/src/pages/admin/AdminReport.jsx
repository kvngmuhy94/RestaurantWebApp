import React from 'react'
import { Header } from '../../components'

const AdminReport = () => {
  return (
    <div className="pt-5 md:pt-20 m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Report" />
      <div className="flex flex-row justify-center my-1 md:m-10">
        <p> Show submitted Queries against company</p> 
      </div>
    </div>
  )
}

export default AdminReport

//generate report
//print report
//download report
//get bill
//delete bill by id