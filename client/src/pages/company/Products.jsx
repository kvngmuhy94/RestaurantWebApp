import { AddCircleOutline, CancelOutlined, DeleteOutline, EditAttributesOutlined, UpdateOutlined } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Header, Button, CompanyProducts } from './../../components'
import { useStateContext } from './../../context/ContextProvider';

import { Box, MenuItem, TextField, Button as Mutton } from '@mui/material';
import { dummyCategories } from '../../dummy-data/database';
import axios from '../../api/axios';
import  toast, { Toaster}  from 'react-hot-toast';
// import {CompanyProductWidget} from '../../components';

const Products = () => {

  const { currentColor } = useStateContext();
  const [addForm, setAddForm] = useState(false);
  const [products, setproducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const userRef = useRef();
  
  const companyId = sessionStorage.getItem('company_Id')
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image1, setImage1] = useState(null);
  const [qty, setQty] = useState('');
  const [message, setMessage] = useState('')


 
  const handleFileChange = (event) => {
    setImage1(event.target.files[0]);
    console.log(image1);
  };

  useEffect(() =>{
   
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}
    
    const fetchCategories = async () =>{
      try {
        const response = await axios.get(`category/getCategoryByCompany/${sessionStorage.getItem('company_Id')}`, {
          headers: headers
        });
        
        setCategories(response.data)
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchCategories();
  }, [])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('companyId', companyId);
    formData.append('name', name);
    formData.append('image1', image1)
    formData.append('categoryId', categoryId)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('qty', qty)

    
    const response = await axios.post('product/add', formData,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(res => {
      const token = res.data.token
      localStorage.getItem('token', token)
      console.log(res);
      toast.success(`product ${name} added successfully`)
      setName('');
      setCategoryId('')
      setPrice('')
      setDescription('')
      setImage1('')
      setQty('')
      setAddForm(false)

    })
    .catch(err => console.log(err))
  // } else {
  //   alert(error)
  // }

  }

 
  
  useEffect(() =>{
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}
 
    const getProducts = async () => {
      try {
        const response = await axios.get(`product/getproductByCompany/${sessionStorage.getItem('company_Id')}}`, {
          headers: headers
        });
        
        setproducts(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    
    getProducts()
  }, [products])




  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex space-between mx-auto my-auto pt-20">

      <Header category="Page" title="Products" />
      </div>
      <Toaster />
      <div className="flex flex-row justify-center md:justify-end  mb-10 mt-10 md:m-0">

      {/* <Link to={"/company/:id/products/add"}>
      
        </Link> */}
        <div onClick={()=>setAddForm(!addForm)}>
          <Button
            color="white"
            bgColor={!addForm ? "primary" : "primaryLight"}
            text={!addForm ? "Add a Product" : "Close Form"}
            borderRadius="10px"
            width="half"
            height="full"
            icon={!addForm ? <AddCircleOutline /> : <CancelOutlined />}
          />
        </div>
      </div>
      <div >
        {
          addForm &&
          <div className='pb-10 shadow-lg'>
      <h2 className='font-bold text-lg text-center'>Add Product Form</h2>

      <div>
        <Box
          component="form"
          sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className='flex flex-col gap-1 px-2 justify-center items-center' 
          >
            <div className='flex flex-col md:flex-row gap-10'>
              <div>
                
                <TextField
                  id="name"
                  type='text'
                  label="Product Name"
                  variant="outlined"
                  required
                  fullWidth
                  inputRef={userRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  required
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
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
              <div>
                <TextField
                  id="price"
                  type='number'
                  label="Product Price"
                  variant="outlined"
                  required
                  fullWidth
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />  
              </div>

              <div>
              <input
                
                id="image1"
                type="file"
                required
                // value={image1}
                onChange={handleFileChange}
              />
              
                {/* <TextField
                  id="image1"
                  type='file'
                  label="Product Image"
                  variant="outlined"
                  required
                  fullWidth
                  value={image1}
                  onChange={(e) => setImage1(e.target.files[0])}
                  />   */}
              </div>

              
            </div>
            <div className='flex flex-col md:flex-row gap-10'>
            <div>
              <TextField
                  id="qty"
                  type='number'
                  label="Quantity"
                  variant="outlined"
                  required
                  fullWidth
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  />  
            </div>
            <div>
                <TextField
                  id="description"
                  type='text'
                  label="Description"
                  variant="outlined"
                  required
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />  
              </div>
            </div>
            <div className="flex items-center justify-around">
              
                <Button
                    color="white"
                    bgColor={"green"}
                    text="Submit"
                    borderRadius="10px"
                    width="half"
                    height="100"
                    type="submit"
                    value="Upload"
                    icon={<AddCircleOutline />}
                    
                />
              
            </div>
          </Box>

      </div>
      </div>
        }
      </div>
      <CompanyProducts products={products} categories={categories} />
      
    </div>
  )
}

export default Products

