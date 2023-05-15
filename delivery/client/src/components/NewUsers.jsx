import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, email, status) {
  return { name, email, status };
}

const rows = [
  createData('User1', 'user1@email.com', 'pending'),
  createData('User2', 'user2@email.com', 'pending'),
  createData('User3', 'user3@email.com', 'pending'),
  createData('User4', 'user4@email.com', 'pending'),
  createData('User5', 'user5@email.com', 'pending'),
 
];

export default function NewUsers() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 , maxWidth: 500}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
