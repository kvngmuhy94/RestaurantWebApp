import React, { useState, useEffect } from 'react'
import { Header, CompanyTable, CompanyWidget} from './../components'
import axios from '../api/axios';
import { Link, useNavigate } from 'react-router-dom';



const Company = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  useEffect(() =>{
    const token = sessionStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    const getAllCompany = async () => {
      try {
        const response = await axios.get('superdashboard/getallCompany', {
          headers: headers
        });
        
        setCompanies(response.data)
      }catch (error){
        console.log(error);
      }
    };
    getAllCompany()
   
  }, [])
  

  

  return (
    
    
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Companies" />
        {/* <CompanyTable /> */}
        <div className='w-100 flex flex-col gap-5'>
          {
            companies.map((item, index) => (
              <div key={item.id} >
                
                <Link to={`/company/${item.id}`} onClick={() => {
                  sessionStorage.setItem('company_Id', item.id)
                }}>
                <div className='' >
                  <CompanyWidget name={item.company_name} logo={item.logo} slogan={item.slogan} description={item.description} />
                </div>
                </Link>
                
                
              </div>
            ))
            
          }
          
            
            
          
        </div>
    </div>
    
  )
}

export default Company;