import React, { useEffect } from 'react';

import { Home, Products, Users, Report, Company, BarChart, LineGraph, Missing, Login, Signup, ForgotPassword, PasswordRetrieved, CompanyDetail} from "./pages";
import {Routes, Route} from "react-router-dom";
import "./App.css"


import { Layout, AdminLayout, Footer } from './components';
import  RequireAuth  from './components/RequireAuth';

export default function App() {
  

    return (
        <Routes>
          {/* dashboard  */}
          

            {/* public route */}
            
            
            <Route path="/login" element={<Login />} />

            {/* admin route */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<AdminLayout />} >
              <Route path="/home" element={<Home />} />
              {/* pages  */}
              <Route path="/company" element={<Company />} />
              <Route path="/company/:id" element={<CompanyDetail />} />
              <Route path="/products" element={<Products />} />
              
              
              <Route path="/users" element={<Users />} />
              <Route path="/report" element={<Report />} />
              {/* charts  */}
              <Route path="/line" element={<LineGraph />} />
              <Route path="/bar" element={<BarChart />} />
            </Route>  
          </Route>
            {/* catch all */}
            <Route path="/*" element={<Missing />} />
            
          
          
        </Routes>
      );
    }