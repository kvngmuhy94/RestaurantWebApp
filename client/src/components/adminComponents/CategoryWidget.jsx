import React from 'react'
import { useStateContext } from '../context/ContextProvider'

const CategoryWidget = ({category, quantity, icon, img, desc}) => {


  return (
    <div className='w-25 h-25 bg-slate-200 flex flex-col items-center justify-center p-10 rounded-xl hover:shadow-2xl hover:cursor-pointer hover:bg-blue-400 hover:text-white'>
        <span>{icon}</span>
        <h3 className='font-bold text-xl'>{category} </h3>
        <h2>Quantity: <span className='font-bold text-2xl'>{quantity}</span></h2>
    </div>
  )
}

export default CategoryWidget