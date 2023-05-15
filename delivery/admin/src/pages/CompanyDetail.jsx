import React, { useEffect } from 'react'
import Toaster, {toast} from 'react-hot-toast'
import { Header, LineC, SmWidget } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import { shoeLogo } from '../dummy-data'
import { products } from '../dummy-data/database'
import { BarC } from '../../../client/src/components'
import axios from '../api/axios'
import { useState } from 'react'
import { Delete, DeleteForeverOutlined } from '@mui/icons-material'

const CompanyDetail = () => {

    // styles
    const cardStyle = `w-60 h-88 rounded-xl p-2`;
    const h1Style = `font-bold text-xl text-center`;
    const h2Style = `font-semibold text-lg`;
    const h3Style = `font-semibold `;
    const spanStyle = `font-normal text-lg`

    const navigate = useNavigate();
    const [company, setCompany] = useState({});
    
    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        const headers = {authorization: `Bearer ${token}`}
    
        const getCompany = async () => {
          try {
            const response = await axios.get(`superdashboard/getbycompany/${sessionStorage.getItem('company_Id')}`, {
              headers: headers
            });
            
            setCompany(response.data)
          }catch (error){
            console.log(error);
          }
        };
        getCompany()}, [])

        const handleDelete = (id) => {
            const token = sessionStorage.getItem('token');
            const headers = {authorization: `Bearer ${token}`}
        
            try {
              const response = axios.delete(`superdashboard/deletecompany/${id}`, {
                headers: headers
              });
              toast.success(`deleted successfully`)
              navigate('/company')
            } catch (error) {
              console.log(error)
            }
        }
    
    // const selectedCompany;

   
    // console.log(company[0]?.company_name)

  return (
    <div className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title={`Company/${company[0]?.company_name}`} />
        <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-start justify-start'>
            <div className={`${cardStyle} bg-slate-200 w-100 h-full shadow-lg flex-4`}>
                <Toaster />
                <h1 className={h1Style}>Company Data</h1>
                <hr />
                <div className='flex flex-col gap-10 pt-3 items-center'>
                    <div className='flex flex-col items-center'>
                        <img src={company[0]?.logo} alt={company[0]?.company_name} 
                            className='w-14 h-14 rounded-full shadow-lg'
                        />
                        
                        <h2 className={h2Style}>{company[0]?.company_name}</h2>
                        <h3 className={`${h3Style} text-center`}>{company[0]?.slogan}</h3>
                        
                        <hr />    
                    </div>
                    <div >

                        <h3 className={h3Style}>Type: <span className={spanStyle}>{company[0]?.company_type}</span></h3>
                        <h3 className={h3Style}>CreatedAt: <span className={spanStyle}>{company[0]?.created_at}</span></h3>
                        <h3 className={h3Style}>Description: <span className={spanStyle}> {company[0]?.description}</span> </h3>
                        
                    <hr />
                    </div>

                    <div className='w-full h-full'>
                        <h2 className={h2Style}>Owner's Info</h2>
                        <h3 className={h3Style}>Name: <span className={spanStyle}>{company[0]?.owner_name}</span></h3>
                        <h3 className={h3Style}>Phone No: <span className={spanStyle}>{company[0]?.phone_number}</span></h3>
                        <h3 className={h3Style}>Email: <span className={spanStyle}>{company[0]?.email} </span></h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10'>
                <div className={`flex flex-col md:flex-row flex-3 gap-10  px-5 `}>
                    <SmWidget title="Total Products" number={"x"} bg="bg-blue-500" />           
                    <SmWidget title="Total Revenue" number={`# ${"xxxxx"}`} bg="bg-green-500" />
                    <SmWidget title="Total Queries" number={`x`} bg="bg-orange-500" />
                    <div>
                        <button className='text-lg bg-slate-500 rounded hover:text-white hover:bg-red-400 hover:shadow-xl p-2 '
                        onClick={() => handleDelete(sessionStorage.getItem('company_Id'))}
                        ><Delete className='hover:text-red-400' /> Delete company</button>
                    </div>
                </div>
                <div className='bg-slate-100 shadow-lg p-1 md:p-10'>
                    <h2 className='text-xl font-bold pb-5'>Analysis</h2>
                    <LineC />
                </div>
            </div>

        </div>
    </div>  )
}

export default CompanyDetail