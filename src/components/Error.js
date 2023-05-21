import React from 'react'
import './Error.css'
import { Breadcrumbs, Card, CardContent, Grid, Typography } from '@mui/material'
import { Logout } from '@mui/icons-material'
import Logoutbar from './Logoutbar'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className='error'>
                <Logoutbar/>
                <Typography sx={{display:'grid',placeContent:'center'}} variant='h4'>Admin</Typography>
                <Grid container>
                    <Grid item xs={4}>
                    <Card sx={{bgcolor: '#ffebee',borderRadius:4,margin:1}} className='crd' onClick={()=>{navigate('/manage/user')}}>
                        <CardContent>
                           <Typography>Manage users</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card sx={{bgcolor: '#ffebee',borderRadius:4,margin:1}} className='crd'>
                        <CardContent>
                           <Typography>Manage requests</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card sx={{bgcolor: '#ffebee',borderRadius:4,margin:1}} className='crd' onClick={()=>{navigate('/admin/addDonor')}}>
                        <CardContent>
                           <Typography>Add Donor</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
            </div>
  )
}

export default Error
