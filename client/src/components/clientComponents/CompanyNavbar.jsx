
import React, { useEffect, useState } from 'react';
import {UserProfile, NavButton, Cart} from '../index.js';
import { useStateContext } from '../../context/ContextProvider';
import { Tooltip } from '@mui/material';
import { AccountCircleRounded, ArrowDropDownRounded, KeyboardArrowDown, Menu, NotificationsActive, ShoppingCartRounded} from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';



const CompanyNavbar = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, orders, setScreenSize, screenSize, totalQuantities, showCart, setShowCart,companyId, isLogin, setIsLogin, asCompany, setAsCompany } = useStateContext();
  const navigate = useNavigate()

  



  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

 

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='bg-slate-50 fixed top-0 w-full'>
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      
      
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<Menu />} />
        

      
        
      
      
      <div className="flex flex-row gap-1">
      {/* <Tooltip title="Orders" placement="bottom">  
      <div className="text-primaryDark  text-xl flex gap-5 justify-center">
          <button type="button" 
                  className='justify-center cursor-pointer '
                  ><ShoppingCartRounded />
              <span className='bg-red-600 rounded-full relative bottom-2 right-1 text-sm w-5 h-5'>{totalQuantities}</span>
          </button>          
      </div>
      </Tooltip> */}
      <Link to={`/company/${sessionStorage.getItem('company_Id')}/register`}>
        <button className='border-2 text-black hover:text-white hover:bg-primaryDark p-2 font-semi-bold text-lg rounded-full hover:shadow-md transition-all'>
          Create A Company
        </button>
      </Link>
      <Tooltip title="Profile" placement="bottom">
        <div
          className="flex items-center cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <AccountCircleRounded className='text-primary text-lg' />
          
        </div>
      </Tooltip>     
      {isClicked.userProfile && (<UserProfile />) } 
    </div>
      
    </div>
    </div>
  );
}

export default CompanyNavbar