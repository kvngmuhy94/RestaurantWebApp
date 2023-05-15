import React, { useEffect, useState } from 'react';
import { Category, Home, Products, Report, Sales, BarChart, LineGraph, ClientIndex, Missing, Login, Signup, EditProductForm, ForgotPassword, PasswordRetrieved, IndexPage, CompanySignup, ProductPage, WaitApproval, Success, AdminHome, AdminLogin, Company, CompanyDetail, Users, AdminSales, AdminReport, AdminLineGraph, AdminBarChart } from "./pages";
import {Routes, Route} from "react-router-dom";
import {AdminLayout, RequireAuth} from "./components"
import "./App.css";
import { Layout, CompanyLayout, Footer, LayoutTwo } from './components';
// import dotenv from 'dotenv';
import { getAllCompanies } from './services/clientServices';
import { getAllCompanySuper } from './services/adminServices';
import { useStateContext } from './context/ContextProvider';
import axios from './api/axios';
// dotenv.config();
// import PaymentPage from './components/CheckoutForm';
// import PaymentForm from './components/PaymentForm';
// import PayPalGateway from './components/PayPalGateway';

const App = () => {
  // const [products, setProducts] = useState([])
  
  
  
  
  const [companies, setCompanies] = useState([]);
  const [adminCompanies, setAdminCompanies] = useState([])

  useEffect(() =>{
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    const getAllCompany = async () => {
      try {
        const response = await axios.get('superdashboard/getallCompany', {
          headers: headers
        });
        
        setAdminCompanies(response.data)
      }catch (error){
        console.log(error);
      }
    };
    getAllCompany();
    getAllCompanies(setCompanies);
       
  }, [])

  console.log(process.env)
    
    return (
        <Routes>
          
          {/* <Route path="/" element={<IndexPage />} />    */}

            {/* customer route */}
            <Route path="/" element={<IndexPage companies={companies} />} /> {/* get all companies */}
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/awaitapproval" element={<WaitApproval />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/forgotpassword/success" element={<PasswordRetrieved />} />
            <Route path="/success" element={<Success />} />

          <Route path='/company' element={<Layout />} >
            <Route path="/company/:id/index" element={<ClientIndex companies={companies} />} />            
            <Route path="/company/:id/product/:id" element={<ProductPage />} />
          </Route>
            {/* company route */}
            <Route element={<RequireAuth />}>
              <Route path="/company" element={<CompanyLayout />} >
                <Route path="/company/:id/register" element={<CompanySignup />} />
                <Route path="/company/:id/dashboard" element={<Home />} />
                {/* pages  */}
                <Route path="/company/:id/sales" element={<Sales />} />
                <Route path="/company/:id/products" element={<Products />} />
                <Route path="/company/:id/category" element={<Category />} />
                <Route path="/company/:id/report" element={<Report />} />
                {/* charts  */}
                <Route path="/company/:id/line" element={<LineGraph />} />
                <Route path="/company/:id/bar" element={<BarChart />} />
                
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/home" element={<AdminHome />} />
                <Route path="/admin/company" element={<Company />} />
                <Route path="/admin/company/:id" element={<CompanyDetail companies={adminCompanies} />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/sales" element={<AdminSales />} />
                <Route path="/admin/report" element={<AdminReport />} />
                {/* //  charts  */}
                <Route path="/admin/line" element={<AdminLineGraph />} />
                <Route path="/admin/bar" element={<AdminBarChart />} /> 
              </Route>
            {/* <Route path="/checkout" element={<PayPalGateway />} /> */}
            
            </Route>
            {/* catch all */}
            <Route path="/*" element={<Missing />} />
            
          
          
        </Routes>
      );
    }

export default App