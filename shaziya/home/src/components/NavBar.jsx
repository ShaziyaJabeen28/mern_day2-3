import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6' >Home</Typography>&nbsp;
                  <Link to='/login'>
                      <Button variant='contained'>Login</Button>&nbsp;
                  </Link>
                  <Link to='/signup'>
                      <Button variant='contained'>SignUp</Button>&nbsp;
                  </Link>
                  <Link to='/tab'>
                      <Button variant='contained'>Lists</Button>&nbsp;
                  </Link>
                  <Link to='/state'>
                      <Button variant='contained'>State</Button>&nbsp;
                  </Link>
                  <Link to='/count'>
                      <Button variant='contained'>Counter</Button>&nbsp;
                  </Link>
                  <Link to='/rav'>
                      <Button variant='contained'>RAV</Button>&nbsp;
                  </Link>
                  <Link to='/api'>
                      <Button variant='contained'>API</Button>&nbsp;
                  </Link>
                  <Link to='/pro'>
                      <Button variant='contained'>Cards</Button>&nbsp;
                  </Link>
              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default NavBar