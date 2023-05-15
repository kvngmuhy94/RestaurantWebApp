
import axios from "../api/axios";




//get header
const getHeader = () =>{
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`};
    return headers
}
// get all companies
export const getAllCompanies = async (arr) => {
    const headers = getHeader();
    try {
        const response = await axios.get('company/get', {
          headers: headers
        });
        
        arr(response.data)
      }catch (error){
        console.log(error);
      }
}

// get products of a company
export const getProductsOfCompany = async ( id, arr) =>{
  const headers = getHeader();
  try {
    const response = await axios.get(`product/getProductByCompany/${id}`, {
      headers: headers
    });
    // isMounted && setProducts(response.data)
    // console.log(response)
    arr(response.data)
  } catch (error) {
    if (error.code === "ERR_BAD_REQUEST"){
      const errorMessage = `Token Expired Login Again`;
      return errorMessage
    } else{
    console.log(error.code);}
  }
}

// get single product
export const getProduct = async (arr) =>{
  const headers = getHeader();
  try {
    const response = await axios.get(`product/getbyid/${sessionStorage.getItem('product_id')}`, {
      headers: headers
    });
  
    arr(response.data)
  } catch (error) {
    console.log(error);
  }
}