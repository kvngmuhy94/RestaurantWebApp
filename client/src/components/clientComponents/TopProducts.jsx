import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, category, price) {
  return { name, category, price };
}

const rows = [
  createData('User1', 'user1@email.com', 'pending'),
  createData('User2', 'user2@email.com', 'pending'),
  createData('User3', 'user3@email.com', 'pending'),
  createData('User4', 'user4@email.com', 'pending'),
  createData('User5', 'user5@email.com', 'pending'),
 
];

const TopProducts = ({Topproducts}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 , maxWidth: 500}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Topproducts.map((product, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product?.name}
              </TableCell>
              <TableCell align="right">{product?.categoryId}</TableCell>
              <TableCell align="right">{product?.price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default TopProducts