import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, setcount] = useState(0)
    const add = (a) => {
        setcount(++count)
        console.log(a.target.value)
    }
    const sub = (b) => {
        setcount(--count)
        console.log(b.target.value)
    }
  return (
      <div>
          <Typography variant="h4" align='center'>Counter</Typography><br /><br />
          <Typography variant="h4">Value = { count}</Typography><br /><br />
          <Button variant='contained' onClick={add}>+</Button>&nbsp;
          <Button variant='contained' onClick={sub}>-</Button>
    </div>
  )
}

export default Counter