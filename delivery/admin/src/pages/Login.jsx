import React, {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from "./../context/AuthProvider";
import axios from "./../api/axios";


import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, AdminPanelSettings, Visibility, VisibilityOff } from '@mui/icons-material';
import { loginIllustration } from '../constants';

import { useStateContext } from '../context/ContextProvider';

import { AdminLayout } from '../components';

const LOGIN_URL = "/user/login";


const Login = () => {

  const {companyId, setCompanyId, setIsLogin, auth, bar, setAuthFunc} = useStateContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userRef = useRef();
  const errRef = useRef();
  
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
 

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('')
  }, [email, pwd])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email, password: pwd}),
        {
          headers: { "Content-Type": "application/json",
          withCredentials: true}
        }
        );
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const token = response?.data?.token;
        
        sessionStorage.setItem('token', token)
        setAuthFunc();
        setEmail('');
        setPwd('');
        navigate(from, { replace: true});
        // navigate('/')
    } catch (error) {
      if (!error?.response){
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400){
        setErrMsg("Missing Email or password");
      } else if (error.response?.status === 401 ){
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      console.log(error)
      errRef.current.focus();
    }
    
  }


  return (  
    <>
    {
      auth ? 
      <AdminLayout />
      :
      <section className="h-screen w-screen bg-slate-400 flex flex-col">
      
      <div className='bg-gradient-to-r from-indigo-500 to-sky-500  w-full h-full flex flex-col'>
      
        <div className="flex flex-col md:flex-row justify-evenly items-center h-half w-5/6 rounded-4xl gap-1 p-0 md:p-5 m-auto shadow-lg">
          
          <div className='w-full flex flex-col md:flex-row'>
          
            {/* img */}
            <div className='flex flex-col-reverse md:flex-col items-center w-full md:w-1/2 h-1/2 p-10'>
              {/* <h2 className='text-3xl font-bold text-slate-50 uppercase'>Company name</h2> */}
              <div className=' m-auto'>
              <img src={loginIllustration} alt="login illustration"
                className='object-cover w-full h-auto'
              />
              
              </div>
            </div>
  
            {/* form */}
            <div className='bg-slate-50 flex flex-col items-center py-5 px-1 rounded-3xl w-full md:w-1/2 shadow-md'>
            <p ref={errRef} className={errMsg ? "block text-red-500" : "hidden"} aria-live="assertive">{errMsg}</p>
              <h2 className='font-bold text-2xl text-primary pb-5 mx-0 md:mx-3 uppercase'>ADmin Login</h2>
              
              <div className='flex flex-col md:items-start gap-0 justify-center'>
              <Box
                component="form"
              //   sx={{
              // '& .MuiTextField-root': { m: 3, width: '40ch' },
              //     }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className='flex flex-col items-start justify-center gap-4 md:gap-10 shadow-xl rounded-2xl p-2 md:p-10 bg-slate-100'
                >
                  <div className='w-72 md:w-96'>
                    <TextField
                      id="input-with-icon-textfield"
                      type='email'
                      label="Email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      required
                      fullWidth
                      inputRef={userRef}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email} 
                      />  
                  </div>
                
                  <div className='w-72 md:w-96'>
                    <TextField
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      label="Password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AdminPanelSettings />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant='outlined'
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      fullWidth
                    />  
                  </div>
  
                  <div className='w-full flex flex-row justify-between items-center'>
                    
                    <button type="submit" className='bg-primary p-2 rounded-xl w-full text-white text-xl font-semibold hover:shadow-lg hover:scale-105 transition-all'>Login</button>
                  </div>
  
              </Box>
              
              <div className='flex flex-col gap-5 md:gap-2 pt-10 items-start'>
                  
                  
                    
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    } 
    </>
  )
}

export default Login