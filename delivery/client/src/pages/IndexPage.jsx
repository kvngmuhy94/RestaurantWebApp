import React, {useEffect, useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { ClientNavbar, CompanyWidget, Footer, PrimarySearchAppBar, Search } from '../components'
import { indexIllustration, companyTypes } from '../constants'
import { useStateContext } from '../context/ContextProvider';
import { dummyCompany, topCompanies } from '../dummy-data/database';
import { MenuItem, TextField } from '@mui/material';
import axios from "./../api/axios";
// import { Search } from '@mui/icons-material';




const IndexPage = ({companies}) => {
  
  const navigate = useNavigate()

  const {setCompanyId, companyId, auth, checkAuth, isLogin} = useStateContext();


  
  const [companyRef, setCompanyRef] = useState();
  
  
  


  // useEffect(() =>{
  //   checkAuth()
  // }, [])
  // useEffect(() => {
  //   let [isMounted, seIsMounted] = useState(true);

  //   const getCompanies = async () =>{
  //     try {
  //       const response = await axios.get(COMPANY_URL, {
  //         signal: controller.signal
  //       });
  //       isMounted && setCompanies(response.data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getCompanies();

  //   return ()=>{
  //     isMounted = false;
  //     controller.abort()
  //   }
  // }, [])
  
  

  return (
    <main className='h-screen w-full bg-slate-300'>
      {/* <nav className=" flex w-full bg-primary fixed top-0">
        <div className=' flex m-auto p-2'>
          <Search />
        </div>
        
      </nav> */}
      <header className='bg-gradient-to-r from-indigo-500 to-sky-500 w-100 h-full shadow-xl flex flex-col-reverse md:flex-row justify-evenly'>
        
        <div className='flex my-auto mx-10 justify-start flex-col items-center'>
          <h1 className="font-bold text-6xl pb-5 text-white">Company Builder</h1>
          <p className=" pb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Neque similique sequi ipsa modi incidunt 
          <br /> voluptatum distinctio nam explicabo ipsam facere.</p>
          {
            !auth &&
            <div className='flex flex-row flex-wrap items-center justify-between gap-5'>
              
                <button className='bg-black hover:text-black hover:bg-white p-5 font-bold text-white text-xl rounded-full shadow-md'
                onClick={()=>navigate('/signup')} >
                  Signup
                </button>
                <button className='bg-primaryLight hover:text-primary hover:bg-white p-5 font-semi-bold text-white text-lg rounded-full shadow-md'
                onClick={()=>navigate('/login')}
                >
                  Login
                </button>
          
            </div>
          }
          
          
        </div>
        <div className='my-auto mx-10 lg:mx-auto w-1/2'>
          <img src={indexIllustration} alt="Build your company"
            className='w-100'
          />
          
        </div>
      </header>
      <section className='pt-10 px-10 bg-slate-300'> 
        <h2 className='font-bold text-2xl uppercase'>Top Companies</h2>
        <hr className="h-1 bg-slate-400 border-0" />
        <div className='flex flex-row flex-wrap gap-5 px-5 justify-evenly  py-10'>
          {
            companies.map((item, index) =>(
              <Link to={`/company/${item.id}/index`} key={index} >
                

                  <CompanyWidget name={item.name} logo={item.logo} slogan={item.slogan} />  
              
              </Link>
            )).length
          } 
          
        </div>
      </section>
      <section className='pb-10 px-10 py-2 md:py-10 bg-slate-200 shadow-lg'>
        <div className='flex flex-row items-center justify-start gap-1 md:gap-10'>
          <h2 className='font-bold text-2xl uppercase'>Registered Companies</h2>
          {/* <p>Of Type: </p>
          <div>
            <TextField
              id="comptype"
              select
              defaultValue=""
              variant="outlined"
              inputRef={companyRef}
            >
              {companyTypes.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div> */}
        </div> 
        <hr className="h-1 bg-slate-400 border-0" />
        <div className='flex flex-col md:flex-row flex-wrap gap-10 px-5 justify-start items-center py-10'>
          {
            companies.map((item, index) => (
              <div key={item.id} onClick={() => {
                setCompanyId(item.id)
                sessionStorage.setItem('company_Id', item.id)
                navigate(`/company/${item.id}/index`)}} >

                <CompanyWidget name={item.company_name} logo={item.logo} slogan={item.slogan} />
              </div>
            ))
          }
 
        </div>
      </section>
    <Footer />
    </main>
  )
}

export default IndexPage