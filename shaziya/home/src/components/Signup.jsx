import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <Typography variant='h1'>SignUp Page</Typography>
          <TextField label='Username' variant='outlined' /><br/><br/>
          <TextField label='Password' variant='outlined' type='password' /><br /><br />
          <Button variant='contained' >Submit</Button> 
    </div>
  )
}

export default Signup