import { AddCircleOutline } from '@mui/icons-material';
import React, { useRef } from 'react'
import { Button, Header } from './../../components';
import { useStateContext } from './../../context/ContextProvider';

const AddProductForm = () => {

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


    };
  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 w-full bg-white rounded-3xl">
      
    <div className="flex space-between mx-auto my-auto">

      <Header category="Page" title="Product/Add" />
    </div>
      <div>
      <h2 className='font-bold text-lg text-center'>Add Category Form</h2>
      <form onSubmit={handleSubmit} className="w-full md:flex-row justify-center ">
          <div className={inputDiv}>
            <fieldset>
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="productname">
                Product Name: 
              </label>
              <input className={inputStyle}
                      id="productname" 
                      type="text" 
                      placeholder="Product Name"
                      autoComplete="off"
                      ref={userRef}
                      required 
              />
            </fieldset>
                      
            <fieldset >
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="category">
                 Category: 
              </label>
              <select name="Category" id="category" required >
                {
                  category.map((item) =>(
                    <option key={item.id} value={item.value}>{item.value}</option>
                  ))
                }
                
              </select>
            </fieldset> 
          </div>  
          <hr className='h-1 bg-slate-300 my-2'/>
          <div className={inputDiv}>
            <fieldset>
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="quantity">
                 Product Quantity: 
              </label>
              <input className={inputStyle} 
                      id="quantity" 
                      type="number" 
                      placeholder="Optional"
                      autoComplete="off"
                      
                    
                      />
            </fieldset>
              
            <fieldset>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="productimage">
                  Product Image:
                </label>
                <input className={inputStyle} 
                        id="productimage" 
                        type="file" 
                        
                        
                        />
            </fieldset>
          </div> 
          <hr className='h-1 bg-slate-300 my-2'/>          
            <div className="flex items-center justify-around pt-10">
              <button type="sumbit">
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Add Product"
                            borderRadius="10px"
                            width="half"
                            height="100"
                            icon={<AddCircleOutline />}
                            
                        />
                    </button>
            </div>
      </form>
      </div>
  </div>
    
  )
}

export default AddProductForm