import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
      <div>
          <TableContainer align='center'>
              <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Members</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Job</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>shaziya</TableCell>
                      <TableCell>21</TableCell>
                      <TableCell>student</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>sona</TableCell>
                      <TableCell>21</TableCell>
                      <TableCell>student</TableCell>
                  </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Tab