import { CheckCircle } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const PasswordRetrieved = () => {
  return (
    <main className='h-screen w-screen bg-gradient-to-r from-indigo-500 to-sky-500 flex flex-col'>
        <div className='text-lg h-auto w-2/4 m-auto bg-green-200 rounded-full flex flex-col justify-evenly shadow-lg px-10 py-5'>
            <div className='flex flex-col justify-center items-center bg-green-200 gap-5'>
                <CheckCircle className='text-green-600 font-bold text-3xl' />
                <h2>A Link has been sent to your email for further instructions</h2>
                <Link to={"/"}>
                            <button className='bg-slate-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-blue-500 hover:shadow-lg'
                                    >Go Home
                            </button>
                </Link>
            </div>
        </div>
    </main>
  )
}

export default PasswordRetrieved