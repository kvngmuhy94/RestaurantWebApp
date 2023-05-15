import React from 'react'
import { Link } from 'react-router-dom'

const WaitApproval = () => {
  return (
    <section className='bg-gradient-to-r from-indigo-500 to-sky-500 w-screen h-screen flex'>
      <div className='m-auto bg-slate-200 w-200 h-200 p-10 flex flex-col items-center justify-center gap-10 rounded-xl shadow-xl'>
        <h1 className='text-xl font-extrabold capitalize text-green-500'>Your Account is Created</h1>
        <h2 className='text-lg font-semibold text-slate-700'>Please Wait For Admin Approval</h2>
        <h2>This won't take long</h2>
        <Link to={'/'}><button className='bg-primary text-white py-2 px-10 rounded font-bold hover:shadow-xl hover:scale-105 transition-all'>HOME</button></Link>
      </div>
    </section>
  )
}

export default WaitApproval