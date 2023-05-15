import React, { useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
import { Delete, DeleteForeverOutlined, DeleteOutline } from '@mui/icons-material'
import  toast, { Toaster}  from 'react-hot-toast';

const CategoryWidget = ({category, quantity, icon, img, desc, id}) => {
  const [toggle, setToggle] = useState(false);


  const handleDelete = (id) =>{
    const token = sessionStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    try {
      const response = axios.delete(`product/delete/${id}`, {
        headers: headers
      });
      toast.success(`${name} deleted`)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='flex flex-col'
      onClick={() => setToggle(!toggle)}
    >
    <div className='w-48 h-25 bg-slate-200 flex flex-col items-center justify-center p-10 rounded-xl hover:shadow-2xl hover:cursor-pointer hover:bg-primaryLight hover:text-white'>
        <span>{icon}</span>
        <h3 className='font-bold text-xl text-primaryDark uppercase'>{category} </h3>
        <h2 className='text-lg font-normal'>Quantity: <span className='font-bold text-2xl '>{quantity}</span></h2>

    </div>
    {
      toggle && 
      
      <div className='flex flex-row'>
        {/* <DeleteOutline className='hover:text-red-500' 
          onClick={() => handleDelete(id)}
        /> */}
        
      </div>
    }
    </div>
  )
}

export default CategoryWidget