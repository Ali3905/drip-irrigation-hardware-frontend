import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';


const Valves = ({ valves }) => {
    
function createData(name, zone, type, status ) {
    return { name, zone, type, status };
  }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  return (
    <div className='flex flex-col gap-[30px] mt-[50px]'>
       
    <h2 className='big_text'>Valves</h2>

    <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650, border : "0.2px solid var(--brown-color)" }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="right">Zone</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {valves?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.zone}</TableCell>
              <TableCell align="center"><Switch /></TableCell>
              <TableCell align="left" sx={{ color : "var(--brown-color)" }}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
    </div>
  )
}

export default Valves