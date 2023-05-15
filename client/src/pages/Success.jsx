import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/ContextProvider';
import { runFireworks } from '../utils/utils';
import { Print } from '@mui/icons-material';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    // localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    sessionStorage.removeItem('product_id')
    runFireworks();
  }, []);

  const handlePrint = () => {

  };

  return (
    <div className="flex">
      <div className="success m-auto">
        <p className="icon">
          {/* <BsBagCheckFill /> */}
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Click below to print your Bill.</p>
        <button 
          className='p-2 rounded-xl bg-green-400 text-white font-semibold hover:shadow-lg hover:scale-110 hover:font-bold transition-all '
          onClick={handlePrint}
        ><Print />  Print Bill</button>
        <p className="description">
          Feel Free To Continue Shopping
          {/* <a className="email" href="mailto:order@example.com">
            order@example.com
          </a> */}
        </p>
        <Link to={"/"}>
          <button type="button" className="bg-primary font-bold text-white px-5 py-2 rounded-xl hover:scale-110 transition-all">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success