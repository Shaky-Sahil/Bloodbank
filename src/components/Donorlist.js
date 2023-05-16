import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors'
import generateUsers from '../Utilities/generateUsers.js';

const Donorlist = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        setUsers(generateUsers())
    },[])
  return (
    <div className='cont'>
        {console.log(users)}
        <Grid container>
        {users.map((user,i)=>(
            <Grid item xs={4} key={i}>
            <Card sx={{bgcolor: '#ffebee',borderRadius:4,margin:1}}>
                <CardContent>
                    <Avatar alt='avatar' src={user.avatar} sx={{ bgcolor: '#b71c1c',width:75,height:75}}>{user.name[0]}</Avatar>
                    <Typography>Name:{user.name}</Typography>
                    <Typography>Blood Group:A+</Typography>
                    <Typography>Email:{user.email}</Typography>
                    <Typography>Mobile Number:{user.mobile}</Typography>
                    <Button className='btn' sx={{ width: 150, height: 25,bgcolor: '#b71c1c' }} variant='contained'>View More</Button>
                </CardContent>
            </Card>
            </Grid>
        )
        )}
        </Grid>
    </div>
  )
}

export default Donorlist
