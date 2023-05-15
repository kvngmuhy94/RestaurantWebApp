import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { links } from '../constants';
import { useStateContext } from '../context/ContextProvider';
import {Cancel, Home} from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material';


const Sidebar = () => {
  const companyId = useParams();

  const { currentColor, activeMenu, setActiveMenu, screenSize, white } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-primaryDark font-bold text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 z-40">
    {activeMenu && (
      <>
        <div className="flex justify-between items-center">
          {/* <Link to={`/company/${companyId}`} onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"> */}
            <div className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <span className='text-white'>LOGO</span>
            </div>
          {/* </Link> */}
          <Tooltip title="Menu" placement="bottom" arrow>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <Cancel />
            </button>
          </Tooltip>
        </div>
        <div className="mt-10 ">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-slate-100 m-3 mt-4 uppercase">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/company/${sessionStorage.getItem('company_Id')}/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'white' : '',
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link.icon}
                  <span className="capitalize">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
    )}
  </div>

);
}

export default Sidebar