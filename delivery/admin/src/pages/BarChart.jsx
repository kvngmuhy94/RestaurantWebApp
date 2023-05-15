import React from 'react';
import { BarC, Header } from './../components';

const BarChart = () => {
  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Charts" title="Bar Chart" />
    <BarC />
    </div>
  )
}

export default BarChart