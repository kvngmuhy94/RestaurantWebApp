import { AddCircleOutline } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Header, Button, ProductsTable } from './../components'
import { useStateContext } from './../context/ContextProvider';

const Products = () => {
  const [products, setProducts] = useState([])
  const { currentColor } = useStateContext();

  useEffect(() =>{
    const token = sessionStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}
 
    const getProducts = async () => {
      try {
        const response = await axios.get(`product/getByCompany/${companyId}`, {
          headers: headers
        });
        
        setProducts(response.data)
      }catch (error) {
        console.log(error);
      }
    };
    getProducts()
  }, [products])

  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex space-between mx-auto my-auto">

      <Header category="Page" title="Products" />
      </div>
      {/* <div className="flex flex-row justify-center md:justify-end  mb-10 mt-10 md:m-0">

      <Link to={"/admin/products/add"}>
      <Button
          color="white"
          bgColor={currentColor}
          text="Add a Product"
          borderRadius="10px"
          width="half"
          height="full"
          icon={<AddCircleOutline />}
        />
        </Link>
      </div> */}
      <ProductsTable products={products} />
      
    </div>
  )
}

export default Products

//add product
//select all product
//select products by category
//select product by id
//update a product
//delete a product
//update product status