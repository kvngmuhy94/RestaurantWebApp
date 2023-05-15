import React, { useContext, useEffect } from 'react';

import { Button, UserData } from '../';
import { userProfileData } from '../../constants';
import { useStateContext } from '../../context/ContextProvider';

import { AdminPanelSettings, BlurLinear, Cancel, Login, Logout, Store } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

const UserProfile = () => {
  const { setAuthFunc, auth, currentColor, isLogin, setIsLogin, companyId, asCompany, setAsCompany, setIsClicked, initialState } = useStateContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  
  const handleClick = (e1,e2) => {
    setIsClicked(initialState)
    e1(e2);
  
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white p-8 rounded-lg w-96 z-10">
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

      {
        auth ? 
          <div>
            <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
              <div>
                <p className="font-semibold text-xl dark:text-gray-200"> {"Admin"} </p>
                
                <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> admin@gmail.com </p>
              </div>  
            </div>
            <div>

                {
                  asCompany ? 
                  <div onClick={() => handleClick(setAsCompany, false)}>
                    <Link to={`/company/${sessionStorage.getItem('company_Id')}/index`}>
                      <UserData 
                      icon={<Store />}
                      title={"Buyer's Page"}
                      desc="Go To Buyer's Page"
                      iconColor={"#03C9D7"}
                      iconBg={"#E5FAFB"}
                      />
                    </Link>
                  </div>
                   :
                  <div onClick={() => handleClick(setAsCompany, true)}>
                    <Link to={`/company/${sessionStorage.getItem('company_Id')}/dashboard`}>
                      <UserData 
                      icon={<BlurLinear />}
                      title={"Company Page"}
                      desc="Go To Company Page"
                      iconColor={"rgb(254, 201, 15)"}
                      iconBg={"#E5FAFB"}
                      />
                    </Link> 
                  </div>
                }

                {/* <UserData 
                  icon={<AdminPanelSettings />}
                  title={"Account Settings"}
                  desc="Change Password"
                  iconColor={"#03C9D7"}
                  iconBg={"#E5FAFB"}
                /> */}
              
            </div>
          <div className="mt-5" onClick={() => {
            setAuthFunc(false)
            localStorage.clear()
            sessionStorage.clear()
            navigate('/')}}>
            <Button
              color="white"
              bgColor={"primary"}
              text="Logout"
              borderRadius="10px"
              width="full"
              icon={<Logout />}
            />
          </div>
            </div>
            :
            <div className="mt-5">
              <Link to={`/login`}>
                <Button
                  color="white"
                  bgColor={"primary"}
                  text="Login"
                  borderRadius="10px"
                  width="full"
                  icon={<Login />}
                />
              </Link>
            </div>

      }
      
    </div>

  );
};

export default UserProfile;
