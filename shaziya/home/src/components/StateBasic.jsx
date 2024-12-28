import { TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    var [name, setname] = useState("Shaziya")
    var [name1, changename] = useState()
    const setval = (set) => {
        console.log(set.target.value)
        setname(set.target.value)
    }
    
    const newname = () => {
        changename(name)
    }
  return (
      <div>
          <Typography variant='h3'>Welcome {name1}</Typography>
          <TextField variant='outlined' onChange={setval} /><br /><br />
          <Button variant='contained' color='primary' onClick={newname}>Submit</Button>
    </div>
  )
}

export default StateBasic