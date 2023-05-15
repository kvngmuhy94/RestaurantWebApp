import { Search, SearchOutlined, AccountCircleRounded, ShoppingCartRounded, ArrowDropDownRounded } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const ClientNavbar = ( {placeholder}) => {
  return (
    <nav className='fixed top-0 w-full bg-white py-2' >
        <div className='flex flex-row justify-between items-center shadow-sm px-10'>
        <div>
            <h2 className='font-bold text-2xl text-primary'> 
                <Link to="/">
                    Logo
                </Link>
            </h2>
        </div>
        <div className='flex flex-row items-center rounded-xl mx-2 border-2 shadow-sm'>
            <SearchOutlined className='text-slate-500' />
            <fieldset>

                <input type="text" className='p-1 bg-slate-100 w-100 md:w-80' placeholder={placeholder} />
            </fieldset>
            <button className='bg-primary hover:bg-dimWhite text-white hover:text-primary font-bold text-xl p-1  rounded-r-lg px-4 ' type='button'>
                Search</button>
        </div>
        <div className="text-primaryDark  text-xl flex gap-5 justify-center">
            <span className='justify-center hover:font-bold cursor-pointer'><ShoppingCartRounded /> Cart</span>
            <span className='justify-center hover:font-bold cursor-pointer'><AccountCircleRounded /> Account <ArrowDropDownRounded /></span>
            
        </div>
        </div>
    </nav>
  )
}

export default ClientNavbar