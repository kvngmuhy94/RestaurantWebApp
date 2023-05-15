import axios from "../api/axios";

//get header
const getHeader = () =>{
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`};
    return headers
}
// get all users
export const getAllUsers = async (arr) => {
    const headers = getHeader();
    try {
      const response = await axios.get('superdashboard/getallUser', {
        headers: headers
      });
      
      arr(response.data)
    }catch (error){
      console.log(error);
    }
  };

// get all companies
export const getAllCompanySuper = async (arr) => {
  const headers = getHeader()
  try {
    const response = await axios.get('superdashboard/getallCompany', {
      headers: headers
    });
    
    arr(response.data)
  }catch (error){
    console.log(error);
  }
};

// get single companies
export const getSingleCompany = async (id, arr) => {
  const headers = getHeader()
  try {
    const response = await axios.get(`superdashboard/getByCompany/${id}`, {
      headers: headers
    });
    
    arr(response.data[0])
  }catch (error){
    console.log(error);
  }
};