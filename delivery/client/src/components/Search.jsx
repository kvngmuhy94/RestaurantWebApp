import { SearchOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const Search = () => {

  const [focus, setFocus] = useState(false)
  const [input, setInput] = useState('')
  return (
    <div className=''>
      
      {/* {
        !focus ? 
          <div className='text-primaryDark text-xl' 
            onClick={() =>setFocus(!focus)}
            >
            <SearchOutlined />
          </div>
        : */}
          <form action="" className='relative w-max mx-auto'>
            <div className='flex flex-row'>
              <input type="search"
                name='search'
                id='search'
                placeholder='Search a product'
                className='relative peer z-10 bg-transparent cursor-pointer focus:cursor-text pl-12 pr-4 w-10 md:w-12 h-10 md:h-12 rounded-full border focus:w-48 md:focus:w-full focus:border-primary'
                value={input}
                onChange={() => setInput(e.target.value)}
              />
              <SearchOutlined className=' absolute left-10 peer-focus:left-4 inset-y-0 my-auto border-r border-transparent peer-focus:border-primary stroke-primary peer-focus:stroke-primary h-8 w-12' />
            </div>
          </form>
      
      
    </div>
  )
}

export default Search


{/* <form action="" className='relative w-max mx-auto'>
            <div className='flex flex-row'>
              <input type="search"
                name='search'
                id='search'
                placeholder='Search a product'
                className='relative peer z-10 bg-transparent cursor-pointer focus:cursor-text pl-12 pr-4 w-10 md:w-12 h-10 md:h-12 rounded-full border focus:w-full focus:border-primary'
              
              />
              <SearchOutlined className=' absolute left-10 peer-focus:left-6 inset-y-0 my-auto border-r border-transparent peer-focus:border-primary stroke-primary peer-focus:stroke-primary h-8 w-12' />
            </div>
          </form> */}