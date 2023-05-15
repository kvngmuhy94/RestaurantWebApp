import React from 'react'

const LgWidget = ({ chart, title, icon}) => {
  return (
    <div className='bg-slate-100 shadow-xl flex flex-col rounded-2xl w-full h-full'>
        <div className='m-auto p-5'>

        <h1 className='font-bold text-xl'>{title}</h1>
        <div>
            {chart}
        </div>
        </div>
    </div>
  )
}

export default LgWidget