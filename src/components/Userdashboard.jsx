import React from 'react'
import Logoutbar from './Logoutbar'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Userdashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
     <Logoutbar/>
                <Grid container>
                    <Grid item xs={6}>
                    <Card sx={{bgcolor: '#ffebee',borderRadius:4,margin:1}} className='crd' onClick={()=>{navigate('/view/requests')}}>
                        <CardContent>
                           <Typography>View Requests</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card sx={{bgcolor: '#ffebee',borderRadius:4,margin:1}} className='crd' onClick={()=>{navigate('/view/donors')}}>
                        <CardContent>
                           <Typography>View Donors</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
    </div>
  )
}

export default Userdashboard
