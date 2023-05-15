import React, { useState } from 'react'
import { useStateContext } from '../../context/ContextProvider'
import { CancelOutlined, Delete, DeleteForeverOutlined, DeleteOutline, Edit } from '@mui/icons-material'
import  toast, { Toaster}  from 'react-hot-toast';
import axios from '../../api/axios';
import { Box, TextField } from '@mui/material';

const CategoryWidget = ({category, qty, icon, img, desc, id}) => {
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("")

  const handleDelete = (id) =>{
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    try {
      const response = axios.delete(`category/delete/${id}`, {
        headers: headers
      });
      toast.success(`${category} deleted`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = () => {
    // e.preventDefault();
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    try {
      const response = axios.patch(`category/update`, {name:name, id: id}, {
        headers: headers
      });
      toast.success(`${category} updated to ${name}`)
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
        {
        !edit ?
        <div>
        <h3 className='font-bold text-xl text-primaryDark uppercase'>{category} </h3>
        {/* <h2 className='text-lg font-normal'>Quantity: <span className='font-bold text-2xl '>{qty}</span></h2> */}
        </div>
        :
        <Box
                component="form"
              //   sx={{
              // '& .MuiTextField-root': { m: 2, width: '25ch' },
              //     }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className='w-40'
                >
                   <TextField
                      id="categoryName"
                      label="Category Name"
                      placeholder={`From: ${category}`}
                      type="text"
                      variant="outlined"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      className='bg-slate-100'
                    />
                    <button type='submit' className='bg-green-500 p-2 rounded-lg hover:bg-slate-100 hover:text-green-600'>Change</button>
                </Box>
        }
        

    </div>
    {
      toggle && 
      
      <div className='flex flex-row items-center justify-between'>
        <button type='button'
        className='bg-white text-red-600 p-2 rounded-lg hover:bg-red-500 hover:text-white '
        onClick={() => handleDelete(id)}><DeleteOutline />Delete</button>
        {
          !edit ?
            <button 
            className='p-2 rounded-lg hover:bg-green-600 hover:text-white' 
            onClick={() => setEdit(!edit)}>
              <Edit /> Edit
            </button>
          :
            <button 
            className='p-2 rounded-lg hover:bg-green-600 hover:text-white' 
            onClick={() => setEdit(!edit)}>
              <CancelOutlined /> Cancel
            </button>
        }
        
      </div>
    }
    </div>
  )
}

export default CategoryWidget