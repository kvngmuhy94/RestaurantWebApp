import React from 'react'

const SmWidget = ({ title, number, icon, bg}) => {

  const background = `${bg} shadow-lg flex flex-col flex-wrap md:flex-nowrap rounded-lg w-52 h-25 text-white hover:text-slate-800 `;
  return (
    <div className={background}>
        <div className='m-auto p-5 hover:text-black'>
            <h1 className='font-bold text-xl '>{title}:</h1>
            <p className='font-normal text-3xl text-slate-100 text-right '>{number}</p>
        </div>   
    </div>
  )
}

export default SmWidget