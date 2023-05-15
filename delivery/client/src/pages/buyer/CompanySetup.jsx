import React, {useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { companyTypes } from '../../constants';
import { Box, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CompanySetup = () => {
    const inputDiv = " flex w-full px-5 py-2 items-center justify-start gap-5 rounded-lg";
    const inputStyle = " shadow appearance-none border rounded w-100 py-2 px-3 text-grey-darker focus:shadow-lg" ;
    
   
    const userRef = useRef();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
  
    const handleSubmit = (e) =>{
      e.preventDefault();
  
  
    }
  return (
    <section className='w-screen h-screen bg-gradient-to-r from-indigo-500 to-sky-500 flex flex-row'>
      <div className='m-auto w-full md:w-1/2 items-center justify-center bg-slate-200 p-0 md:p-5 rounded-3xl shadow-2xl'>
          <div className='flex justify-between font-bold text-xl pb-10 '>
          <h3 className='text-primary'>Almost Done, One More Step</h3>
          

          </div>
          <h2 className='font-bold text-2xl pb-10 text-center text-primaryDark'>Company Setup form</h2>
        {/* <form onSubmit={handleSubmit} className="w-full md:flex-row justify-center items-between ">
            <div className={inputDiv}>
              <fieldset>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="companyType"> Company Type: </label>
                <select name="companyType" id="companyType" className="shadow w-1/2 " required>
                    {
                        companyTypes.map((company) => (
                            <option value={company.type} key={company.id}>{company.type}</option>
                        ))
                    }
                </select>
              </fieldset>
            </div>
            <div className={inputDiv}>
              <fieldset>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="companyname">
                  Company Slogan: 
                </label>
                <input className={inputStyle}
                        id="companyname" 
                        type="text" 
                        placeholder="Company Slogan"
                        autoComplete="off"
                        ref={userRef}
                        
                        
                        required 
                />
              </fieldset>
                        
              
            </div> 
            <div className={inputDiv}>
            <fieldset >
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="comptype">
                   Company Description: 
                </label>
                <input className={inputStyle} 
                        id="co" 
                        type="email" 
                        placeholder="example@mail.com"
                        autoComplete="off"
                        required
                        
                />
              </fieldset> 
            </div>
            <button type="submit" className='form-submit hover:bg-black'>
              Submit
            </button>
        </form> */}
        <div className='flex flex-col items-center gap-5'>

        
        <Box
          component="form"
          sx={{
        '& .MuiTextField-root': { m: 2, width: '30ch' },
             }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
        <div>
          <TextField
            id="owner"
            label="Owner's name"
            placeholder=""
            multiline
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="filled-select-currency"
            select
            label="Company Type"
            defaultValue=""
            fullWidth
            variant="filled"
            required
            inputRef={userRef}
          >
            {companyTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
        <TextField
          id="slogan"
          label="Company Slogan"
          placeholder=""
          multiline
          variant="filled"
        />
        </div>
        <div>
          <TextField
          id="Comp-Desc"
          label="Company Description"
          multiline
          rows={4}
          placeholder='About your company'
          variant='filled'
        />
        </div>
            
        </Box>
        </div>
        </div>
        </section>
  )
}

export default CompanySetup