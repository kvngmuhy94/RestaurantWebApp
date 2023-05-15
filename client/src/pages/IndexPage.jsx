import React, {useEffect, useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { CompanyWidget, Footer, Navbar, RegisteredCompanies } from '../components'
import { indexIllustration, companyTypes } from '../constants'
import { useStateContext } from '../context/ContextProvider';

import { MenuItem, TextField, makeStyles } from '@mui/material';
import axios from "./../api/axios";
// import { Search } from '@mui/icons-material';



const IndexPage = ({companies}) => {
  
  const navigate = useNavigate()

  const {setCompanyId, companyId, auth} = useStateContext();

  const topCompanies = companies.slice(-5)
  
  return (
    <>
    <Navbar />
    
    <main className='h-screen w-full bg-slate-300'>
      {/* <nav className=" flex w-full bg-primary fixed top-0">
        <div className=' flex m-auto p-2'>
          <Search />
        </div>
        
      </nav> */}
      <header className='bg-gradient-to-r from-indigo-500 to-sky-500 w-100 h-full shadow-xl flex flex-col-reverse md:flex-row justify-evenly'>
        
        <div className='flex my-auto mx-10 justify-start flex-col items-start'>
          <h1 className="font-extrabold text-6xl pb-5 text-red-500">Store Builder</h1>
          <p className=" pb-5 text-white font-medium ">
                Discover the ultimate shopping experience with our multi-store e-commerce platform. 
          <br />
                Find everything you need from the latest fashion trends to home décor and electronics,
          <br /> all in one place. 
          
          <br /> Enjoy hassle-free checkout and fast shipping. Start exploring today!"</p>
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
            topCompanies.map((item, index) =>(
              <div key={index} >
                <CompanyWidget name={item.name} logo={item.logo} slogan={item.slogan} id={item.id}/> 
              </div>
            ))
          } 
          
        </div>
      </section>
      <RegisteredCompanies companies={companies} />
    <Footer />
    </main>
    </>
  )
}

export default IndexPage