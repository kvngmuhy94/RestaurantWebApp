import React, {useRef, useState, useEffect} from 'react';
import axios from '../api/axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { companyTypes } from './../constants';
import  toast, { Toaster}  from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Box, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const REGISTER_URL = "/company/add";



const CompanySignup = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  

  const inputDiv = " flex flex-col md:flex-row align-left w-full px-5 py-2 items-center justify-start gap-5 rounded-lg";
  const inputStyle = " shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:shadow-lg" ; 

  const userRef = useRef();
  const errorRef = useRef();

  const [company_name, setCompany_Name] = useState('');
  const [validCompanyName, setValidCompanyName] = useState(false);
  const [slogan, setSlogan] = useState('');
  const [logo, setLogo] = useState(null);

  const [email, setEmail] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [company_type, setCompany_Type] = useState('');
  const [description, setDescription] = useState('');
  const [owner_name, setOwner_Name] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [setup, setSetup] = useState(false)

  
  useEffect(() => {
    userRef.current.focus()
  }, []);


  const handleSubmit = (e) =>{
    e.preventDefault();
    
    // if(name && companyId && price && description && categoryId && image1 && qty === null){
    axios.post('company/add', {company_name, email, slogan, description, logo, owner_name, phone_number, company_type},
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    })
    .then(res => {
      const token = res.data.token
      localStorage.getItem('token', token)
      toast.success(`company created successfully`)
      setCompany_Name('');
      setEmail('');
      setSlogan('');
      setDescription('');
      setLogo(null);
      setOwner_Name('');
      setPhone_Number('');
      setCompany_Type('');
      navigate(`/company/${id}/dashboard`);

    })
    .catch(err => console.log(err))
  // } else {
    
    // if button enabled with JS hack 
    
    
    // axios.post("http://localhost:8080/company/add", { company_name, email, slogan, description, logo, owner_name, phone_number, company_type})
    // .then(res => console.log(res))
    // .then(err => console.log(err))

  }

  return (
    <section className='w-screen h-full md:h-screen bg-gradient-to-r from-indigo-500 to-sky-500 flex flex-row'>
      <div className='m-auto py-20 md:py-0'>
        <div className=' m-auto items-center justify-center bg-slate-100 py-10 md:py-10 rounded-3xl shadow-2xl'>
          <Toaster />
            <h1 className='font-bold text-lg md:text-3xl pb-2 md:pb-10 text-center'>Register Your Company</h1>
            <hr className='h-1 bg-slate-300 my-2'/>
       
          <div>
            <Box
                    component="form"
                    sx={{
                  '& .MuiTextField-root': { m: 2, width: '30ch' },
                      }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >

              {/* page 1 */}
              {
                !setup &&
                <div>
                  <div className={inputDiv}>
                    <div>
                      <TextField
                        id="company_name"
                        label="Company name"
                        type="text"
                        placeholder="Company Name"
                        inputRef={userRef}
                        value={company_name}
                        onChange={(e) => setCompany_Name(e.target.value)}
                        variant="outlined"
                        required
                      />
                    </div>

                    <div>
                      <TextField
                        id="email"
                        label="Company Email"
                        type="email"
                        placeholder="Company Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        required
                      />
                    </div>
                              
                  </div>  
                  {/* <hr className='h-1 bg-slate-300 my-2 border-2'/> */}
                  <div className={inputDiv}>
                    <div>
                        <TextField
                          id="phone_number"
                          label="Company Number"
                          type="number"
                          placeholder="Company Number"
                          value={phone_number}
                          onChange={(e) => setPhone_Number(e.target.value)}
                          variant="outlined"
                          required
                        />
                    </div>
                    <div>
                        <TextField
                          id="companylogo"
                          label="Logo"
                          type="file"
                          value={logo}
                          onChange={(e) => setLogo(e.target.value)}
                          variant="outlined"
                          required
                        />
                    </div>
                      
                  </div> 
                  {/* <hr className='h-1 bg-slate-300 my-2'/> */}

                
                  <div className={inputDiv}>
                    
                    
                      
                  </div>
                  <hr className='h-1 bg-slate-300'/>
                  <div className='flex justify-end pr-10 pt-2'>

                    <span className='text-blue-500 p-2 border-2 hover:border-blue-500 rounded-lg cursor-pointer'
                  
                    onClick={()=> setSetup(true)}>Next</span>
                  </div>
                </div>
              }
              

              {/* page 2 */}
              {
                setup && 
                <div>
                  <div className={inputDiv}>
                    <div>
                      <TextField
                        id="owner"
                        label="Owner's name"
                        placeholder=""
                        multiline
                        variant="outlined"
                        required
                        value={owner_name}
                        onChange={(e) => setOwner_Name(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        id="companytype"
                        select
                        label="Company Type"
                        defaultValue=""
                        fullWidth
                        variant="outlined"
                        required
                        value={company_type}
                        onChange={(e) => setCompany_Type(e.target.value)}
                      >
                        {companyTypes.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </div>
                  {/* <hr className='h-1 bg-slate-300 my-2 border-2'/> */}

                  <div className={inputDiv}>      
                    <div>
                      <TextField
                        id="slogan"
                        label="Company Slogan"
                        placeholder="Slogan"
                        multiline
                        variant="outlined"
                        value={slogan}
                        onChange={(e) => setSlogan(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <TextField
                      id="Comp-Desc"
                      label="Company Description"
                      multiline
                      rows={4}
                      placeholder='About your company'
                      variant='outlined'
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    </div>
                  </div>               
                  
                  <hr className='h-1 bg-slate-300 my-2'/>
                  <div className={`flex flex-row align-left w-full px-5 py-2 items-center justify-between rounded-lg`}>
                    <div>
                      <span className='text-blue-500 p-2 border-2 hover:border-blue-300 rounded-lg cursor-pointer'
                        onClick={()=> setSetup(false)}>Previous</span>
                    </div>
                    <div className='flex w-full justify-end'>
                      <button className="bg-slate-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" 
                              type="submit"
                            
                              // disabled={!validName || !validPwd || !validMatch ? true : false}
                              >
                                Register
                      </button>
                    </div>
                    
                  </div>
              </div>
              }
              
                  
            </Box>
          </div>    
        </div>
      </div>
    </section>
    
  )
}

export default CompanySignup;