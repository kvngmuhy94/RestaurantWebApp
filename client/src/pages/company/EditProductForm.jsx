import { AddCircleOutline } from '@mui/icons-material';
import React, { useRef } from 'react'
import { Button, Header } from '../../components';
import { useStateContext } from '../../context/ContextProvider';
import { Box, MenuItem, TextField } from '@mui/material';
import { dummyCategories } from '../../dummy-data/database';


const EditProductForm = () => {

    const category = [
      {
        id: 1,
        value: "--Choose a category--"},
      {
        id: 2,
        value: "category 1"},
      {
        id: 3,
        value: "category 2"},
      {
        id:4,
        value: "category 3"},
      {
        id: 5,
        value: "category 4"},
    ]
    const { currentColor } = useStateContext();
        
    const inputDiv = " flex w-full px-5 py-2 items-center justify-start gap-5 rounded-lg";
    const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:shadow-lg" ;
    const userRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted");


    };
  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 w-full bg-white rounded-3xl">
      
    <div className="flex space-between mx-auto my-auto">

      <Header category="Page" title="Product/Edit" />
    </div>
      <div>
      <h2 className='font-bold text-lg text-center'>Edit Product Form</h2>

      <div>
        <Box
          component="form"
          sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className='flex flex-col items-start gap-1 px-2'
          >
            <div>
              <div>
                <TextField
                  id="productname"
                  type='text'
                  label="Product Name"
                  variant="outlined"
                  required
                  fullWidth
                  inputRef={userRef}
                />  
              </div>

              <div>
              <TextField
                        id="category"
                        select
                        label="Product Category"
                        defaultValue=""
                        fullWidth
                        variant="outlined"
                        required
                        
                      >
                        {dummyCategories.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
              </div>
            </div>

            <div>
              <div>
                <TextField
                  id="quantity"
                  type='number'
                  label="Product Quantity"
                  variant="outlined"
                  required
                  fullWidth
                  
                />  
              </div>

              <div>
                <TextField
                    id="image"
                    type='file'
                    label="Product Image"
                    variant="outlined"
                    required
                    fullWidth
                    
                  />  
              </div>
            </div>
            <div className="flex items-center justify-around pt-10">
              
                <Button
                    color="white"
                    bgColor={currentColor}
                    text="Add Product"
                    borderRadius="10px"
                    width="half"
                    height="100"
                    type="submit"
                    icon={<AddCircleOutline />}
                    
                />
              
            </div>
          </Box>

      </div>
    
      </div>
  </div>
    
  )
}

export default EditProductForm