import React from 'react'
import {Header, LineC} from './../components'


const LineGraph = () => {
  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Charts" title="Line Graph" />
    <LineC />
    </div>
  )
}

export default LineGraph