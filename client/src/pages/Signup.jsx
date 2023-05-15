import React, {useRef, useState, useEffect} from 'react';
import axios from "../api/axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, AdminPanelSettings, MailOutline, MyLocation, PhoneCallback, Visibility, VisibilityOff } from '@mui/icons-material';
import { companyIllustration } from '../constants';
import { Navbar } from '../components';
import { Link, useNavigate } from 'react-router-dom';


const REGISTER_URL = "/user/signup";


const Signup = () => {

  const navigate = useNavigate();

  const notify = () => toast.success('User Created, Wait for Admin Approval', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  
  const inputDiv = " flex flex-col md:flex-row align-left w-full px-5 py-2 items-center justify-start gap-5 rounded-lg";
  const inputStyle = "w-100 px-5 py-2 items-center justify-start"

  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [l_name, setLastName] = useState('');
  

  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');

  const [pwd, setPwd] = useState('');


  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  

  const [errMsg, setErrMsg] = useState('');


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  useEffect(() => {
    userRef.current.focus();
  }, []);

  
  
  useEffect(() => {
    // const result = PWD_REGEX.test(pwd);
    // console.log(result);
    // console.log(pwd);
    // setValidPwd(result);
    if (pwd === matchPwd) {
      setValidMatch(true)
    }
    // const match = pwd === matchPwd;
    // setValidMatch(match);
  }, [pwd, matchPwd]);
  
  useEffect(() => {
    setErrMsg('');
  }, [name, pwd, matchPwd])
  


  const handleSubmit = async (e) => {
      e.preventDefault();
      // if button enabled with JS hack
      
      if (validMatch){
        axios.post("user/signup", { name, password: pwd, email, contactNumber, l_name, address})
        .then(res => {
          if(res.data.massage === "Successfully Registered."){
            // toast.success(`User created successfully, Waiting for admin's Approval`)
            notify()
            navigate('/awaitapproval')
          }else{
            alert("error")
          }
        })
        // .then(res => console.log(res))
        .then(err => console.log(err))
      // try {
      //     const response = await axios.post(REGISTER_URL,
      //         JSON.stringify({ name, password: pwd, email, contactNumber }),
      //         {
      //             headers: { 'Content-Type': 'application/json' },
      //             withCredentials: true
      //         }
      //     );
      //     console.log(response?.data);
      //     console.log(response?.accessToken);
      //     console.log(JSON.stringify(response))
      //     setSuccess(true);
      //     //clear state and controlled inputs
      //     //need value attrib on inputs for this
      //     setUser('');
      //     setPwd('');
      //     setMatchPwd('');
      // } catch (err) {
      //     if (!err?.response) {
      //         setErrMsg('No Server Response');
      //     } else if (err.response?.status === 409) {
      //         setErrMsg('Username Taken');
      //     } else {
      //         setErrMsg('Registration Failed')
      //     }
      //     errRef.current.focus();
      // }
  } else {
    setErrMsg('Password does not match')
  }
}


  return (
    <section className=' w-full md:w-screen  h-full md:h-screen bg-gradient-to-r from-indigo-500 to-sky-500 flex flex-col md:flex-row'>
      <Navbar />
      <div className='m-auto w-full flex flex-col md:flex-row items-center justify-evenly p-0 md:p-10 rounded-3xl gap-5 md:gap-1 py-20 md:py-0'>
          
          {/* company detail */}
          <div className='w-1/2 h-1/2 rounded-xl flex flex-col items-center gap- md:gap-5'>
            <img src={companyIllustration} alt="sign up illustration"
              className='w- h-'
            />
            {/* <h2 className='font-bold text-5xl capitalize text-slate-50'></h2> */}
            
          </div>

          {/* form */}
          <div className="bg-slate-100 w-100 rounded-xl shadow-lg p-2">
            <div className='w-full p-1 md:p-5 flex flex-col items-center justify-center'>
              <p ref={errRef} className={errMsg ? "block text-red-500" : "hidden"} aria-live="assertive">{errMsg}</p>
              <h1 className='font-bold text-3xl pb-2 md:pb-10'>Sign Up as Customer</h1>

            <div className=''>
              <Box
                component="form"
                sx={{
              '& .MuiTextField-root': { m: 2, width: '25ch' },
                  }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className='flex flex-col items-start gap-1 px-2'
                >
                <div>
                  <div className={inputDiv}>
                    <div>
                      <TextField
                        id="name"
                        type='text'
                        label="First Name"
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
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />  
                    </div>
                    <div>
                      <TextField
                        id="l_name"
                        type='text'
                        label="Last Name"
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
                        
                        onChange={(e) => setLastName(e.target.value)}
                        value={l_name}
                      />  
                    </div>
                    
                  </div>
                  <hr />
                  <div className={inputDiv}>
                    <div>
                      <TextField
                      id="phonenumber"
                      type='number'
                      label="Phone Number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneCallback />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      required
                      fullWidth
                      onChange={(e) => setContactNumber(e.target.value)}
                      value={contactNumber}
                    />  
                    </div>
                    
                    <div>
                      <TextField
                      id="email"
                      type='email'
                      label="Email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutline />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      fullWidth
                    />  
                    </div>

                   
                  </div>
                  <hr />
                  <div className={inputDiv}>
                    <div>
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
                      required
                      fullWidth
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                    />  
                    </div>
                    <div>
                      <TextField
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      label="Confirm Password"
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
                    
                      fullWidth
                    />  
                    </div>
                  </div>
                  <hr />
                  <div className={inputDiv}>
                  <div>
                      <TextField
                      id="address"
                      label="Address"
                      placeholder="Customer's Address"
                      multiline
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MyLocation />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      required
                    />
                    </div>
                  </div>
                  <div className="flex flex-row w-full px-5 py-2 items-center justify-between">
                  <Link to={'/'}>
                  
                    <button type='button' className='border-2 rounded-xl p-2  hover:font-semibold hover:bg-slate-300'> Cancel</button>
                  </Link>
                  <button type="submit" className='bg-primary p-2 rounded-lg text-white text-lg hover:shadow-lg hover:font-semibold'>Register</button>
                  </div>
                </div>
                  
              </Box>
            </div>
        </div>
            
          </div>

        
      </div>
    </section>
    
  )
}

export default Signup