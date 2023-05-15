import { Settings } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ThemeSettings from './ThemeSettings'
import CompanyNavbar from './CompanyNavbar'

const CompanyLayout = () => {

    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings, setAsCompany } = useStateContext();
    
   

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <main>
            <div className="flex relative dark:bg-main-dark-bg">
                                
                {activeMenu ? (
                <div className="w-72 fixed sidebar bg-primary">
                    <Sidebar />
                </div>
                ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                    <Sidebar />
                </div>
                )}
                <div
                className={
                    activeMenu
                    ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                    : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                }
                >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <CompanyNavbar />
                </div>
                <div>
                    {themeSettings && (<ThemeSettings />)}
                <Outlet />
                <Footer />
                </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default CompanyLayout