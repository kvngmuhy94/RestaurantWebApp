import React from 'react';

import { Button } from '..';
import { userProfileData } from '../../constants';
import { useStateContext } from '../../context/ContextProvider';
import { Cancel, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const { currentColor, auth } = useStateContext();
  const navigate = useNavigate()

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<Cancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Admin </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  true   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> admin@gmail.com </p>
        </div>
      </div>
      <div>
        {
          auth ? 
          <div className="mt-5" onClick={() => {
            localStorage.clear()
            sessionStorage.clear()
            navigate('/')}}>
            <Button
              color="white"
              bgColor={currentColor}
              text="Logout"
              borderRadius="10px"
              width="full"
              icon={<Logout />}
            />
          </div>
          :
          <div className="mt-5">
          <Link to={`/login`}>
            <Button
              color="white"
              bgColor={currentColor}
              text="Login"
              borderRadius="10px"
              width="full"
              icon={<Login />}
            />
          </Link>
        </div>
        }
    
      
      
        </div>
    </div>

  );
};

export default AdminProfile;
