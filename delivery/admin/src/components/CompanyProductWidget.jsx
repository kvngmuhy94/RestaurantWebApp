import React, { useState } from 'react'
import axios from '../api/axios';
import { DeleteOutline, EditAttributesOutlined } from '@mui/icons-material';
import  toast, { Toaster}  from 'react-hot-toast';



const CompanyProductWidget = ({name, id, companyId, price, qty, image1}) => {
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
    

    const handleEdit = () =>{
    alert("edit")
    }
  return (
    <div>
        <div className='w-56 flex flex-col gap-5 bg-slate-100 hover:bg-primary text-primaryDark hover:text-white rounded-2xl hover:shadow-lg cursor-pointer hover:scale-105 transition-all'
              onClick={() => setToggle(!toggle)}>
                <Toaster />
        <div className='flex flex-row gap-1 items-center justify-evenly'>
        <div>
            <img src={image1} alt={name}
            className='w-28 h-28 object-cover'
            />
        </div>
            <div className='flex flex-col justify-center items-start w-1/2 font-semibold'>
                <h2 className=''>ID: {id}</h2>
                <h2 className=''>Company ID: {companyId}</h2>
                <h2>{name}</h2>
                <h3># <span className='text-green-400'>{price}</span></h3>
                {
                qty > 30 ? 
                <h3>Stock: <span className='text-normal text-primary'> {qty}</span></h3>
                :
                <h3>Stock: <span className='text-normal text-red-400'> {qty}</span></h3>                          
                
                }
            </div>
        </div>
        </div>
              { toggle && 
                <div className='flex flex-row gap-5 items-end justify-end text-xl font-bold'>
                  <button className="text-slate-500 hover:text-green-500" onClick={() => handleEdit()}><EditAttributesOutlined /></button>
                  <button className=" text-red-500"onClick={() => handleDelete(id)}><DeleteOutline /></button>
                </div>
              }
        </div>
              
  )
}

export default CompanyProductWidget