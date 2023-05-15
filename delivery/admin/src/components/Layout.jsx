import { Outlet } from "react-router-dom";

import React from 'react'

import ClientNavbar from "./ClientNavbar";

const Layout = () => {
  return (
    <main className="">
        <ClientNavbar />
        <Outlet />
        
    </main>
  )
}

export default Layout;