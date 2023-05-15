import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

    const handleSubmit = () =>{

    }

  return (
    <main className='h-screen w-screen bg-gradient-to-r from-indigo-500 to-sky-500 flex flex-col'>
        <div className='text-lg h-auto w-2/4 m-auto bg-red-100 rounded-full flex flex-col justify-evenly shadow-lg'>
            <div className='px-10 m-auto py-5'>
                <h1 className='font-bold text-3xl pb-5'>Retrieve Your Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email' className='font-bold'>Email:</label>
                        <input className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
                                type="email"
                                placeholder="example@email.com"

                                required
                        />
                    </div>
                    <Link to={"/forgotpassword/success"}>
                        <button className='bg-slate-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-blue-500 hover:shadow-lg'
                                type="submit">Submit
                        </button>
                    </Link>
                </form>
            </div>
        </div>
        
    </main>
  )
}

export default ForgotPassword