import React from 'react'

const SmWidget = ({ title, number, icon, bg, h1Color, pColor}) => {
  return (
    <div className={`bg-${bg} bg-slate-50 shadow-lg flex flex-col flex-wrap md:flex-nowrap rounded-2xl w-48 h-25`}>
        <div className='m-auto p-5'>
            <h1 className={`font-bold text-xl text-${h1Color}`}>{title}:</h1>
            <p className={`font-semibold text-3xl text-${pColor} text-right`}>{number}</p>
        </div>   
    </div>
  )
}

export default SmWidget