import "./userList.scss";
import { useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { ClientList } from "../../dummydata";
import { Link, useParams } from "react-router-dom";

const UserList = () => {

  const [data, setData] = useState(ClientList);
  let { id } = useParams();

  const handleDelete = (id) => {
    setData(data.filter((item)=>item.id !== id))
  }
const columns: GridColDeF[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'UserName', width: 150,},
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) =>{
      return(
        <>
          <Link to={"/User/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          
            <DeleteOutline className="userListDel" onClick={()=>handleDelete(params.row.id)}/>
          
        </>
      )
    }
  },
];



  return (
    <div className="userlist">
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}

export default UserList