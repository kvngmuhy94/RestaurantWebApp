import { Settings } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ThemeSettings from './ThemeSettings'

const AdminLayout = () => {

    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
      }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <main>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <Tooltip
                    title="Settings"
                    placement="top"
                >
                    <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: '50%' }}
                    className="text-3xl text-white rounded-full p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                    <Settings />
                    </button>
    
                </Tooltip>
                </div>
                
                {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
                    <Navbar />
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

export default AdminLayout