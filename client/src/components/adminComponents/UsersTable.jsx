import React, {useRef, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { companyTypes } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import { DeleteOutline, Edit, EditAttributesOutlined, PrintOutlined } from '@mui/icons-material';
import axios from '../../api/axios';
import { Backdrop, Box, Fade, MenuItem, Modal, TextField, Typography } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';

const UsersTable = ({users}) => {

  
  const [userId, setUserId] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const [status, setStatus] = useState('');
  const options = [
    {
      id: 1,
      value: "true"
    },
    {
      id: 2,
      value: "false"
    }
  ];

  const handleEdit = async() => {
    const token = localStorage.getItem('token');
    const headers = {authorization: `Bearer ${token}`}

    try {
    const response = axios.patch(`superdashboard/updateUserStatus`, {id:userId, status: status}, {
      headers: headers
    });
    
    toast.success("User Status Updated Successfully")
    } catch (error) {
      
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'First Name', width: 150,},
    { field: 'l_name', headerName: 'Last Name', width: 150 },
    {
      field: 'contactNumber',
      headerName: 'Contact Number',
      type: 'number',
      width: 140,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 220,
      type: 'email'
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
      type: 'text'
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 90,
      
    },
   
    {
      field: 'action',
      headerName: 'Action',
      width: 90,
      renderCell: (params) =>{
        return(
          <>
            {/* <Link to={"/User/" + params.row.id}>
              <button className="companyListEdit bg-green-500 rounded-xl text-white p-2 font-bold hover:shadow-xl "><PrintOutlined />  Print Detail</button>
            </Link> (params.row.id) */}
            <div onClick={() => {
              handleOpen();
              setUserId(params.row.id);
              }}>
              <button className="companyListEdit bg-green-500 rounded-xl text-white p-2 font-bold hover:shadow-xl "><Edit /> Edit</button>
            </div>
                        
          </>
        )
      }
    },
  ];


  return (
    <>
    <Toaster />
    <div style={{ height: 500, width: '100%' }}>
      {/* <div className='h-full w-full'> */}
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // disableSelectionOnClick
        // checkboxSelection
      />
    </div>

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
                      component={"form"}
                      noValidate
                      autoComplete="off"
                      onSubmit={handleEdit}
                      className=' flex flex-col gap-2 w-full'
                      >
                        <div className='flex flex-col justify-between  py-2'>

                          <Typography id="transition-modal-title" variant="h6" component="h2"
                          className='cursor-pointer hover:bg-slate-200 p-2 rounded-xl'
                          >
                            Edit Status
                          </Typography>
                         
                         
                    
                            <div>
                            <TextField
                              id="id"
                              type='number'
                              label="User Id"
                              variant="outlined"
                              required
                              fullWidth
                              disabled
                              value={userId}
                            
                            />  
                            </div>
                            <div>

                              <TextField
                                id="status"
                                select
                                label="User Status"
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
                            </div>
                          <button 
                            type='submit'
                            className="bg-green-600 p-2 rounded text-white hover:shadow-lg hover:font-bold transition-all hover:scale-105">
                            Update
                          </button>

                        
                        
                        
                        </Box>
                        </Fade>
                        </Modal>
    }
    </> 
  );
}

export default UsersTable;


// valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,