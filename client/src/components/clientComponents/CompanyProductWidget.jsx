import React, { useEffect, useRef, useState } from 'react'
import axios from '../../api/axios';
import { DeleteOutline, Edit, EditAttributesOutlined } from '@mui/icons-material';
import  toast, { Toaster}  from 'react-hot-toast';
import { dummyImg } from '../../constants';
import { useNavigate } from 'react-router-dom';
// import EditProductModal from '../EditProductModal';
import { Backdrop, Box, Fade, MenuItem, Modal, TextField, Typography } from '@mui/material';



const CompanyProductWidget = ({name, id, companyId, price, qty, image1, desc, catId, categories, status}) => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [edit, setEdit] = useState(true)
    
    const userRef = useRef()
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState()
    const [newQty, setNewQty] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState();
    const [newStatus, setNewStatus] = useState('');
    
    const options = [
      {
        id: 1,
        value: "true",
      },
      {
        id: 2,
        value: "false"
      }
    ]

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      borderRadius: '10%'
    };

    const handleDelete = (id) =>{
        const token = localStorage.getItem('token');
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
      // e.preventDefault();
      const token = localStorage.getItem('token');
      const headers = {authorization: `Bearer ${token}`}
  
      try {
          const response = axios.patch(`product/update`, { name: productName,categoryId: categoryId, price: productPrice, description: description, qty: newQty, id: id}, {
            'Content-Type': 'application/json',
             headers: headers
        });

        toast.success(`Product ${name} updated`)
        // navigate('/')
      } catch (error) {
        console.log(error)
      }
    }

    const handleStatus = () => {
      const token = localStorage.getItem('token');
      const headers = {authorization: `Bearer ${token}`}
  
      try {
          const response = axios.patch(`product/updatestatus`, {id, status: newStatus }, {
            'Content-Type': 'application/json',
             headers: headers
        });

        toast.success(`Product ${name} status updated`)
        // navigate('/')
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <div>
        <div className='w-80 h-full flex flex-col gap-5 bg-slate-100 hover:bg-primary text-primaryDark hover:text-white rounded-2xl hover:shadow-lg cursor-pointer hover:scale-105 transition-all'
              onClick={() => setToggle(!toggle)}>
                <Toaster />
        <div className='flex flex-row gap-1 items-center justify-evenly'>
        <div>
            <img src={image1 || dummyImg} alt={name}
            className='w-48 h-48 object-cover'
            />
        </div>
            <div className='flex flex-col justify-center items-start w-1/2 font-semibold'>
                <h2 className=''>ID: {id}</h2>
                {/* <h2 className=''>Company ID: {companyId}</h2> */}
                <h2>Name: {name}</h2>
                <h2>categoryId: {catId}</h2>
                <h3>Price: $<span className='text-green-500'>{price}</span></h3>
                {
                qty > 30 ? 
                <h3>Stock: <span className='text-normal text-green-500'> {qty}</span></h3>
                :
                <h3>Stock: <span className='text-normal text-red-400'> {qty}</span></h3>                          
                
                }
                {
                  status === "true" ?
                  <h3>Status <span className='text-green-500'>{status}</span></h3>
                  :
                  <h3>Status <span className='text-red-500'>{status}</span></h3>

                }
            </div>
        </div>
        </div>
              { toggle && 
                <div className='flex flex-row gap-5 items-end justify-between text-xl font-bold bg-slate-200'>
                  <button className="text-red-500 p-2 rounded hover:text-white hover:bg-red-500"onClick={() => handleDelete(id)}><DeleteOutline /> Delete</button>
                  
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          timeout: 500,
                        },
                      }}
                      
                    >
                      <Fade in={open}>
                      <Box sx={style}
                      >
                        <div className='flex flex-row justify-between'>

                          <Typography id="transition-modal-title" variant="h6" component="h2" onClick={() =>{setEdit(true)}}>
                            Edit Product
                          </Typography>
                          <Typography id="transition-modal-title" variant="h6" component="h2" onClick={() =>{setEdit(false)}}>
                            Edit Status
                          </Typography>
                        </div>
                        {
                        edit ?
                        
                          <Box 
                          component={"form"}
                          noValidate
                          autoComplete="off"
                          onSubmit={handleEdit}
                          className=' flex flex-col gap-2 w-full'
                        >
                          <div>
                          <TextField
                            id="productId"
                            type='number'
                            label="Product Id"
                            variant="outlined"
                            required
                            fullWidth
                            value={id}
                           
                          />  
                          </div>
                          <div>
                          <TextField
                            id="productName"
                            type='text'
                            label="New Product Name"
                            variant="outlined"
                            placeholder={`Old Name: ${name}`}
                            
                            fullWidth
                            inputRef={userRef}
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                          />  
                          </div>
                          <div>
                          <TextField
                            id="productPrice"
                            type='number'
                            label="New Product Price"
                            variant="outlined"
                            placeholder={`Old Price: ${price}`}
                            
                            fullWidth
                            
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                          />  
                          </div>
                          <div>
                          <TextField
                            id="productQuantity"
                            type='number'
                            label="New Product Quantity"
                            variant="outlined"
                            placeholder={`Old Quantity: ${qty}`}
                            
                            fullWidth
                            
                            value={newQty}
                            onChange={(e) => setNewQty(e.target.value)}
                          />  
                          </div>
                         
                          <div>
                            <TextField
                              id="categoryId"
                              select
                              label="Product Category"
                              defaultValue=""
                              fullWidth
                              variant="outlined"
                              
                              value={categoryId}
                              onChange={(e) => setCategoryId(e.target.value)}
                            >
                                    {categories.map((option) => (
                                      <MenuItem key={option.value} value={option.id}>
                                        {option.name}
                                      </MenuItem>
                                    ))}
                                  </TextField>
                          </div>
                          <div>
                          <TextField
                            id="description"
                            type='text'
                            label="New description"
                            variant="outlined"
                            placeholder={`${desc}`}
                            
                            fullWidth
                            
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />  
                          </div>
                          <button 
                            type='submit'
                            className="bg-green-600 p-2 rounded text-white hover:shadow-lg hover:font-bold transition-all hover:scale-105">
                            Update
                          </button>
                        </Box>

                        :
                        <Box
                        component={"form"}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleStatus}
                        className=' flex flex-col gap-2 w-full '>
                          
                          <div>
                          <TextField
                            id="productId"
                            type='number'
                            label="Product Id"
                            variant="outlined" 
                            required
                            fullWidth  
                            value={id}
                           
                          />  
                          </div>
                          <div>
                          <TextField
                              id="status"
                              select
                              label="Product Status"
                              defaultValue=""
                              fullWidth
                              variant="outlined"
                              required
                              value={newStatus}
                              onChange={(e) => setNewStatus(e.target.value)}
                            >
                                    {options.map((option, index) => (
                                      <MenuItem key={option.id} value={option.value}>
                                        {option.value}
                                      </MenuItem>
                                    ))}
                                  </TextField>
                          </div>
                          <div>
                            <button
                            type='submit'
                            className='bg-green-600 p-2 rounded text-white hover:shadow-lg hover:font-bold transition-all hover:scale-105'>Update Status</button>
                          </div>

                        </Box>
                        }
                        </Box>
                      </Fade>
                    </Modal>
                    <button className="p-2 rounded text-slate-600 hover:bg-green-500 hover:text-white" onClick={handleOpen}><Edit /> Edit</button>
                </div>
              }
        </div>
              
  )
}

export default CompanyProductWidget