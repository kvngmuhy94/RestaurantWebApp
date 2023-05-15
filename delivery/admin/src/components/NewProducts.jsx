import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, category, price, status, options) {
  return { name, category, price, status, options };
}

const rows = [
  createData('Company 1', 159, 6.0, "mm/dd/yyyy"),
  createData('Company 2', 237, 9.0, "mm/dd/yyyy"),
  createData('Company 3', 262, 16.0, "mm/dd/yyyy"),
  createData('Company 4', 305, 3.7, "mm/dd/yyyy"),
  createData('Company 5', 356, 16.0, "mm/dd/yyyy"),
];

export default function NewProducts() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650, minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Settled (#)</TableCell>
            <TableCell align="right">Profit (#)</TableCell>
            <TableCell align="right">Date</TableCell>
           
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
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.options}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
