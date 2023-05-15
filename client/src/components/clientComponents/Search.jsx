import { SearchOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

  const [focus, setFocus] = useState(false)
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () =>{
   

    try {
        const response = axios.get(`product/getById/${input}`);

      
      navigate(`/company/${sessionStorage.getItem('company_Id')}/product/${input}`)
    } catch (error) {
      console.log(error)
    }
  }
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
          <form onSubmit={handleSubmit} className='relative w-max mx-auto'>
            <div className='flex flex-row'>
              <input type="text"
                name='search'
                id='search'
                placeholder='Search a product By Id'
                className='relative peer z-10 bg-transparent cursor-pointer focus:cursor-text pl-12 pr-4 w-10 md:w-12 h-10 md:h-12 rounded-full border focus:w-48 md:focus:w-full focus:border-primary'
                value={input}
                onChange={(e) => setInput(e.target.value)}
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