import React, { useState } from 'react'
import Logoutbar from './Logoutbar'
import { Button, Typography } from '@mui/material'
import './requestlist.css'

const Requestlist = () => {
    const [requests,setRequests] = useState([])
  return (
    <div>
      <Logoutbar/>
      <Typography variant='h3' sx={{display:'grid',placeItems:'center'}}>Requests</Typography>
      <div className='rq-crd'>
        Blood required: A+
        Units: 10
        status: urgent
        <Button variant='contained'>Donate</Button>
      </div>
      <div className='rq-crd'>
        Blood required: A+
        Units: 10
        status: urgent
      </div>
    </div>
  )
}

export default Requestlist
