import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { companyTypes } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import { DeleteOutline, Edit, EditAttributesOutlined, PrintOutlined } from '@mui/icons-material';
import axios from '../../api/axios';

const AdminSalesTable = ({sales}) => {

  
  let { id } = useParams();
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
  

  // const handleEdit = async(id) => {
  //   const token = localStorage.getItem('token');
  //   const headers = {authorization: `Bearer ${token}`}

  //   try {
  //   const response = axios.patch(`superdashboard/updateStatus`, {id, status: option}, {
  //     headers: headers
  //   })
  //   } catch (error) {
      
  //   }
  // }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'First Name', width: 150,},
    { field: 'l_name', headerName: 'Last Name', width: 150 },
    {
      field: 'contactNumber',
      headerName: 'Contact Number',
      type: 'number',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Total',
      width: 200,
      type: 'number'
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 70,
      
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 70,
      
    },
   
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) =>{
        return(
          <>
            {/* <Link to={"/User/" + params.row.id}>
              <button className="companyListEdit bg-green-500 rounded-xl text-white p-2 font-bold hover:shadow-xl "><PrintOutlined />  Print Detail</button>
            </Link> */}
            <div onClick={(params.row.id)}>
              <button className="companyListEdit bg-green-500 rounded-xl text-white p-2 font-bold hover:shadow-xl "><Edit /> Edit</button>
            </div>
                        
          </>
        )
      }
    },
  ];


const rows = [
  { id: 1, custormerName: 'Snow', companyType: 'Jon', age: 35 },
  { id: 2, custormerName: 'Lannister', companyType: 'Cersei', age: 42 },
  { id: 3, custormerName: 'Lannister', companyType: 'Jaime', age: 45 },
  { id: 4, custormerName: 'Stark', companyType: 'Arya', age: 16 },
  { id: 5, custormerName: 'Targaryen', companyType: 'Daenerys', age: null },
  { id: 6, custormerName: 'Melisandre', companyType: null, age: 150 },
  { id: 7, custormerName: 'Clifford', companyType: 'Ferrara', age: 44 },
  { id: 8, custormerName: 'Frances', companyType: 'Rossini', age: 36 },
  { id: 9, custormerName: 'Roxie', companyType: 'Harvey', age: 65 },
];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={sales}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // disableSelectionOnClick
        // checkboxSelection
      />
    </div>
  );
}

export default AdminSalesTable;

