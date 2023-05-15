import { Outlet } from "react-router-dom";

import React from 'react'

import ClientNavbar from "./Navbar";

const LayoutTwo = () => {
  return (
    <main className="">
        <ClientNavbar />
        <Outlet />
        
    </main>
  )
}

export default LayoutTwo