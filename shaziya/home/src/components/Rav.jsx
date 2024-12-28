import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Rav = () => {
    var [name, setname] = useState("")
    const first = () => {
        setname("React")
    }
    const second = () => {
        setname("Angular")
    }
    
    const third = () => {
        setname("VUE")
    }
    useEffect(() => {
        second()
    },[])
  return (
      <div>
          <Typography variant='h3' align='center'>Welcome {name}</Typography><br /><br />
          <Button variant='contained' onClick={first}>React</Button>&nbsp;
          <Button variant='contained' onClick={second}>Angular</Button>&nbsp;
          <Button variant='contained' onClick={third}>VUE</Button>
    </div>
  )
}

export default Rav