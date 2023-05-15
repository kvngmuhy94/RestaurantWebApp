import { Outlet } from "react-router-dom";

import React from 'react'

import Navbar from "./Navbar";

const Layout = () => {
  return (
    <main className="">
        <Navbar />
        <Outlet />
        
    </main>
  )
}

export default Layout;