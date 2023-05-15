import React, { useContext, useEffect, useState } from 'react';
import {UserProfile, NavButton, Cart, Search} from './';
import { useStateContext } from '../context/ContextProvider';
import { Tooltip } from '@mui/material';
import { AccountCircleRounded, ArrowDropDownRounded, KeyboardArrowDown, Menu, NotificationsActive, ShoppingCartRounded} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { dummyCompany } from '../dummy-data/database';
import { shoeLogo, watchLogo } from '../dummy-data';
import { Login } from '../pages';
import { CartContext } from '../context/CartContext';



const Navbar = ({params}) => {

  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize, totalQuantities, showCart, setShowCart,companyId, isLogin, setIsLogin, asCompany, setAsCompany } = useStateContext();


  const selectedCompany = dummyCompany.find(company => String(company.id) === companyId)
  const [userProfile, setUserProfile] = useState(false)

  const cart = useContext(CartContext);

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity , 0)

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
  // console.log(cartProducts);
  // useEffect(() => {
  //   console.log(asCompany)
  // }, [asCompany])

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='bg-slate-50 fixed top-0 w-full'>
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      
        
          <div>
            <h2 className='font-bold text-2xl text-primary'> 
              <Link to={`/`}>
                  {/* <img src={watchLogo} alt=""
                    className='w-30 h-14 hover:shadow-lg'
                  /> */}
                  <h1>LOGO</h1>
              </Link>
            </h2>
          </div>
          
      
{/* 
      {
        isLogin  ? 
      <div className="flex flex-row gap-1 my-auto justify-evenly items-center">
        <Tooltip>
          <Search />
        </Tooltip>
        <div className='flex flex-row flex-end'>

        
        <Tooltip title="Cart" placement="bottom">  
        <div className="text-primaryDark  text-xl flex gap-5 justify-center">
            <button type="button" 
                    className='justify-center cursor-pointer '
                    onClick={() => setShowCart(true)}><ShoppingCartRounded />
                <span className='bg-red-600 rounded-full relative bottom-2 right-1 text-sm w-5 h-5'>{totalQuantities}</span>
            </button>          
        </div>
        </Tooltip>
        {showCart && <Cart />} 

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
      :  */}
      <div className="flex flex-row gap-1">
      <Tooltip title="Cart" placement="bottom">  
      <div className="text-primaryDark  text-xl flex gap-5 justify-center">
          <button type="button" 
                  className='justify-center cursor-pointer '
                  onClick={() => setShowCart(true)}><ShoppingCartRounded />
              <span className='bg-red-600 rounded-full relative bottom-2 right-1 text-sm w-5 h-5'>{productCount}</span>
          </button>          
      </div>
      </Tooltip>
      {showCart && <Cart productCount={productCount}/>} 

      <Tooltip title="Profile" placement="bottom">
        <div
          className="flex items-center cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => setUserProfile(!userProfile)}
        >
          <AccountCircleRounded className='text-primary text-lg' />
          
        </div>
      </Tooltip>    
       
      {userProfile && (<UserProfile />) } 
    </div>
      
    </div>
    </div>
  );
};

export default Navbar;
