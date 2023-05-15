import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Toaster, {toast} from 'react-hot-toast'
import { Header, LineC, SmWidget } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { BarC } from '../../components'
import axios from '../../api/axios';
import { Delete, Edit, Settings } from '@mui/icons-material'
import { Backdrop, Box, Fade, MenuItem, Modal, TextField, Tooltip, Typography } from '@mui/material'
import { useStateContext } from '../../context/ContextProvider'
import { companyTypes } from '../../constants'
import { getProductsOfCompany } from '../../services/clientServices'

const CompanyDetail = ({companies}) => {

     // const {currentColor} = useStateContext();
  const params = useParams();
//   console.log(id);
  const userRef = useRef();
  const navigate = useNavigate();
  // const [company, setCompany] = useState({});
  const [products, setProducts] = useState([]);
  // console.log(Number(params.id));
  

   useEffect(() => {
    // getSingleCompany(id, setCompany)  
    
    // const getCompany = async () => {
    //   const token = localStorage.getItem('token');
    //   const headers = {authorization: `Bearer ${token}`};

    //   try {
    //     const response = await axios.get(`superdashboard/getByCompany/${id}`, {
    //       headers: headers
    //     });
        
    //     setCompany(response.data[0])
    //   }catch (error){
    //     console.log(error);
    //   }
    // };
    
    getProductsOfCompany(params.id, setProducts)
  }, [])
  const options = [
    {
      id: 1,
      value: "true"
    },
    {
      id: 2,
      value: "false"
    }
  ]

  // layout states
  const [togOptions, setTogOptions] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [edit, setEdit] = useState(true)

  // form states
  const [companyName, setCompanyName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [logo, setLogo] = useState([]);
  const [newDescription, setNewDescription] = useState('');
  const [owner_name, setOwner_Name] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [email, setEmail] = useState('');
  const [company_type, setCompany_Type] = useState('')
  const [status, setStatus] = useState('')

  
  // styles
  const cardStyle = `w-60 h-88 rounded-xl p-2`;
  const h1Style = `font-bold text-xl text-center`;
  const h2Style = `font-semibold text-lg`;
  const h3Style = `font-semibold `;
  const spanStyle = `font-normal text-lg`

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10%'
  };
       
  const company = companies.find(company => String(company?.id) === params.id);
    

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        const headers = {authorization: `Bearer ${token}`}
    
        try {
          const response = await axios.delete(`/superdashboard/deleteCompany/${company?.id}`, {
            headers: headers
          });
          // toast.success(`deleted successfully`)
          // alert("deleted successfully")
          navigate(`/admin/company`)
        } catch (error) {
          console.log(error)
        }
    }

    const handleEdit = async (e) => {
      e.preventDefault();
      const formData = new FormData();

      formData.append('id', company.id);
      formData.append('company_name', companyName);
      formData.append('logo', logo)
      formData.append('slogan', slogan)
      formData.append('email', email)
      formData.append('description', newDescription)
      formData.append('owner_name', owner_name)
      formData.append('phone_number', phone_number)
      formData.append('company_type', company_type)

      const token = localStorage.getItem('token');
      const headers = {authorization: `Bearer ${token}`}
  
      try {
        const response = await axios.patch(`/superdashboard/update`,formData, {
          headers: headers
        });
        
        // toast.success(`updated successfully`)
        alert("updated successfully")
        
      } catch (error) {
        console.log(error)
      }
  
    }

    const handleUpdate = async () => {
      const token = localStorage.getItem('token');
      const headers = {authorization: `Bearer ${token}`}
  
      try {
        const response = await axios.patch(`/superdashboard/updateCompanyStatus`, {status:status, id: company?.id}, {
          headers: headers
        });
        
        // toast.success(`updated successfully`)
        alert("done")
      } catch (error) {
        console.log(error)
      }
    }
    // console.log("done",company);
  
  return (
    <section className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl pt-5 md:pt-20">
      {/* <Toaster /> */}
    <Header category="Page" title={`Company/${company?.company_name}`} />
    <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-center md:items-start justify-start'>


        <div className={`${cardStyle} w-96 h-full shadow-lg flex-4 ${company?.status === "false" ? "bg-red-200 text-slate-500" : "bg-slate-200"}`}>
            <h1 className={h1Style}>Company Data <span>
            
              
              </span></h1>
            <hr />
            <div className='flex flex-col gap-10 pt-3 items-center'>
                <div className='flex flex-col items-center'>
                    <img src={company?.logo} alt={company?.company_name} 
                        className='w-14 h-14 rounded-full shadow-lg'
                    />
                    
                    <h2 className={h2Style}>{company?.company_name}</h2>
                    <h3 className={`${h3Style} text-center`}>{company?.slogan}</h3>
                    {
                      company?.status === "true" ?
                        <h3 className={h3Style}>Status: <span className='text-green-500 uppercase'>{company?.status}</span></h3>
                      :
                        <h3 className={h3Style}>Status: <span className='text-red-500 uppercase'>{company?.status}</span></h3>
                    }
                    <hr />
                    <Tooltip title="Edit Company" placement="bottom">
                  <button
                     className='text-black hover:text-primaryDark bg-slate-50 cursor-pointer hover:text-primary hover:scale-105 transition-all hover:shadow-lg mx-auto p-1 border-2 rounded-xl'
                    onClick={() => setTogOptions(!togOptions)}
                    ><Settings /> Edit Company</button>
                  </Tooltip>    
                  {
                    togOptions && 

                      <div className='bg-slate-50 w-100 flex flex-col rounded-xl'>
                         <button className='text-lg rounded p-2 hover:bg-green-600 hover:text-white '
                          onClick={ handleOpen}
                          ><Edit className=' hover:shadow-xl' /> Edit Company</button>

                          <button className='text-lg rounded p-2 hover:bg-red-600 hover:text-white '
                          onClick={handleDelete}
                          ><Delete className='hover:shadow-xl' /> Delete Company</button>
                     
                      </div>
                  }
                </div>
                <div className='w-full h-full' >

                    <h3 className={h3Style}>Type: <span className={spanStyle}>{company?.company_type}</span></h3>
                    <h3 className={h3Style}>CreatedAt: <span className={spanStyle}>{company?.created_at}</span></h3>
                    <h3 className={h3Style}>Description: <span className={spanStyle}> {company?.description}</span> </h3>
                    
                <hr />
                </div>

                <div className='w-full h-full'>
                    <h2 className={h2Style}>Owner's Info</h2>
                    <h3 className={h3Style}>Name: <span className={spanStyle}>{company?.owner_name}</span></h3>
                    <h3 className={h3Style}>Phone No: <span className={spanStyle}>{company?.phone_number}</span></h3>
                    <h3 className={h3Style}>Email: <span className={spanStyle}>{company?.email} </span></h3>
                </div>
               
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <div className={`flex flex-col md:flex-row flex-3 gap-10  px-5 `}>
                <SmWidget title="Total Products" number={products.length} bg="bg-blue-500" color={"white"} />           
                <SmWidget title="Total Revenue" number={`# ${"xxxxx"}`} bg="bg-green-500" color={"white"} />
                <SmWidget title="Total Queries" number={`x`} bg="bg-orange-500" color={"white"} />
                <div className=' flex flex-col rounded-lg w-52 h-25 '>
                  
                 

{
      open && 

              <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                  
                >
                  <Fade in={open}>
                  <Box sx={style}
                  >
                    <div className='flex flex-row justify-between  py-2'>

                      <Typography id="transition-modal-title" variant="h6" component="h2"   onClick={() =>{setEdit(true)}}
                      className='cursor-pointer hover:bg-slate-200 p-2 rounded-xl'
                      >
                        Edit Company
                      </Typography>
                      <Typography id="transition-modal-title" variant="h6" component="h2" onClick={() =>{setEdit(false)}}
                      className='cursor-pointer hover:bg-slate-200 p-2 rounded-xl'
                      >
                        Edit Status
                      </Typography>
                    </div>
                    {
                    edit ?
                    
                      <Box 
                      component={"form"}
                      noValidate
                      autoComplete="off"
                      onSubmit={handleEdit}
                      className=' flex flex-col gap-2 w-full'
                    >
                      <div>
                      <TextField
                        id="companyId"
                        type='number'
                        label="Company Id"
                        variant="outlined"
                        required
                        fullWidth
                        disabled
                        value={company?.id}
                       
                      />  
                      </div>
                      <div>
                      <TextField
                        id="companyName"
                        type='text'
                        label="New Company Name"
                        variant="outlined"
                        placeholder={`Old Name: ${company?.company_name}`}
                        
                        fullWidth
                        inputRef={userRef}
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />  
                      </div>
                      <div>
                      <TextField
                        id="slogan"
                        type='text'
                        label="New Company Slogan"
                        variant="outlined"
                        placeholder={`Old Price: ${company?.slogan}`}
                        fullWidth
                        value={slogan}
                        onChange={(e) => setSlogan(e.target.value)}
                      />  
                      </div>
                     
                      <div>
                        <TextField
                          id="companyType"
                          select
                          label="Company Type"
                          defaultValue=""
                          fullWidth
                          variant="outlined"
                          
                          value={company_type}
                          onChange={(e) => setCompany_Type(e.target.value)}
                        >
                                {companyTypes.map((option) => (
                                  <MenuItem key={option.id} value={option.value}>
                                    {option.value}
                                  </MenuItem>
                                ))}
                              </TextField>
                      </div>

                      <div>
                      <TextField
                        id="description"
                        type='text'
                        label="New description"
                        variant="outlined"
                        placeholder={`${company?.description}`}
                        
                        fullWidth
                        
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                      />  
                      </div>

                      <div>
                      <TextField
                        id="ownerName"
                        type='text'
                        label="New Owner"
                        variant="outlined"
                        placeholder={`${company?.owner_name}`}
                        
                        fullWidth
                        
                        value={owner_name}
                        onChange={(e) => setOwner_Name(e.target.value)}
                      />
                      </div>
                      <div>
                      <TextField
                        id="phoneNumber"
                        type='number'
                        label="New Number"
                        variant="outlined"
                        placeholder={`${company?.phone_number}`}
                        
                        fullWidth
                        
                        value={phone_number}
                        onChange={(e) => setPhone_Number(e.target.value)}
                      />
                      </div>
                      <div>
                      <TextField
                        id="email"
                        type='email'
                        label="New Email"
                        variant="outlined"
                        placeholder={`${company?.email}`}
                        
                        fullWidth
                        
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />  
                      </div>
                      <div>
                      <TextField
                        id="logo"
                        type='file'
                        label="New Company Logo"
                        variant="outlined"
                        fullWidth
                        // value={logo}
                        // onChange={(e) => setLogo(e.target.value)}
                      />  
                      </div>
                      <button 
                        type='submit'
                        className="bg-green-600 p-2 rounded text-white hover:shadow-lg hover:font-bold transition-all hover:scale-105">
                        Update
                      </button>
                    </Box>
                    :
                    <Box
                      component={"form"}
                      noValidate
                      autoComplete="off"
                      onSubmit={handleUpdate}
                      className=' flex flex-col gap-2 w-full'
                    >
                      <div>
                        <TextField
                          id="companyId"
                          type='number'
                          label="Company Id"
                          variant="outlined"
                          fullWidth
                          value={company?.id}
                          disabled
                        />  
                      </div>
                      
                      <div>
                        <TextField
                          id="status"
                          select
                          label="Company Status"
                          defaultValue=""
                          fullWidth
                          variant="outlined"
                          
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                                {options.map((option) => (
                                  <MenuItem key={option.id} value={option.value}>
                                    {option.value}
                                  </MenuItem>
                                ))}
                              </TextField>
                      </div>
                      <button 
                        type='submit'
                        className="bg-green-600 p-2 rounded text-white hover:shadow-lg hover:font-bold transition-all hover:scale-105">
                        Update
                      </button>

                    </Box>
                    }
                    </Box>
                    </Fade>
                    </Modal>
    }
        
                </div>
            </div>
            <div className='bg-slate-100 shadow-lg p-1 md:p-10 md:block hidden'>
                <h2 className='text-xl font-bold pb-5'>Analysis</h2>
                <LineC />
            </div>
        </div>

    </div>

              
              
</section>  
  )
}

export default CompanyDetail