import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { dummyCompany } from '../../dummy-data/database';
import { companyTypes } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import { DeleteOutline, PrintOutlined } from '@mui/icons-material';
import axios from '../../api/axios';

const OrdersTable = () => {

  const [deliver, setDeliver] = useState(true)
  const [data, setData] = useState(dummyCompany);
  let { id } = useParams();


  const handleDelete = (id) => {
    setData(data.filter((item)=>item.id !== id))  
  }

  const handlePrint = async(id) => {
    // const token = localStorage.getItem('token')
    // const headers = {Authorization: `Bearer ${token}`}
    // try {
    //   const response = axios.post(`bill/generatebill`, {
    //     headers: headers
    //   },{})
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'custormerName', headerName: 'Custormer\' Name', width: 200,},
    { field: 'quantities', headerName: 'Product', width: 150 },
    {
      field: 'price',
      headerName: 'Price Per Unit',
      type: 'number',
      width: 90,
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 90,
      type: 'number'
    },
    {
      field: 'date',
      headerName: 'Date',
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
              deliver ?  <span className='text-green-600 border-2 rounded-lg p-1 border-green-500'>Delivered</span> 
              :
              <span className='text-yellow-500 border-2 rounded-lg p-1 border-yellow-500'>Pending</span>
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
            {/* <Link to={"/User/" + params.row.id}>
              <button className="companyListEdit bg-green-500 rounded-xl text-white p-2 font-bold hover:shadow-xl "><PrintOutlined />  Print Detail</button>
            </Link> */}
            <div OnClick={handlePrint(params.row.id)}>
              <button className="companyListEdit bg-green-500 rounded-xl text-white p-2 font-bold hover:shadow-xl "><PrintOutlined />  Print Detail</button>
            </div>
                        
          </>
        )
      }
    },
  ];


const rows = [
  // { id: 1, custormerName: 'Snow', companyType: 'Jon', age: 35 },
  // { id: 2, custormerName: 'Lannister', companyType: 'Cersei', age: 42 },
  // { id: 3, custormerName: 'Lannister', companyType: 'Jaime', age: 45 },
  // { id: 4, custormerName: 'Stark', companyType: 'Arya', age: 16 },
  // { id: 5, custormerName: 'Targaryen', companyType: 'Daenerys', age: null },
  // { id: 6, custormerName: 'Melisandre', companyType: null, age: 150 },
  // { id: 7, custormerName: 'Clifford', companyType: 'Ferrara', age: 44 },
  // { id: 8, custormerName: 'Frances', companyType: 'Rossini', age: 36 },
  // { id: 9, custormerName: 'Roxie', companyType: 'Harvey', age: 65 },
];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        // checkboxSelection
      />
    </div>
  );
}

export default OrdersTable;


// valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,