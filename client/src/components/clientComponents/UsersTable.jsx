import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { dummyCompany } from '../dummy-data/database';
import { companyTypes } from '../constants';
import { Link, useParams } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

const UsersTable = () => {
  const [active, setactive] = useState(false)
  const [data, setData] = useState(dummyCompany);
  let { id } = useParams();
  const handleDelete = (id) => {
    setData(data.filter((item)=>item.id !== id))  
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'companyName', headerName: 'Company Name', width: 200,},
    { field: 'companyType', headerName: 'Type', width: 150 },
    {
      field: 'customers',
      headerName: 'Customers',
      type: 'number',
      width: 90,
    },
    {
      field: 'product',
      headerName: 'Products',
      width: 90,
      type: 'number'
    },
    {
      field: 'revenue',
      headerName: 'Revenue',
      width: 160,
      type: 'number'
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      renderCell: () => {
        return (
          <>
            {
              active ?  <span>Active</span> 
              :
              <span>Not Active</span>
            }
           
          </>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) =>{
        return(
          <>
            <Link to={"/User/" + params.row.id}>
              <button className="companyListEdit">View</button>
            </Link>
            
              <DeleteOutline className="companyListDel" onClick={()=>handleDelete(params.row.id)}/>
            
          </>
        )
      }
    },
  ];


const rows = [
  { id: 1, companyName: 'Snow', companyType: 'Jon', age: 35 },
  { id: 2, companyName: 'Lannister', companyType: 'Cersei', age: 42 },
  { id: 3, companyName: 'Lannister', companyType: 'Jaime', age: 45 },
  { id: 4, companyName: 'Stark', companyType: 'Arya', age: 16 },
  { id: 5, companyName: 'Targaryen', companyType: 'Daenerys', age: null },
  { id: 6, companyName: 'Melisandre', companyType: null, age: 150 },
  { id: 7, companyName: 'Clifford', companyType: 'Ferrara', age: 44 },
  { id: 8, companyName: 'Frances', companyType: 'Rossini', age: 36 },
  { id: 9, companyName: 'Roxie', companyType: 'Harvey', age: 65 },
];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}

export default UsersTable;


// valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,