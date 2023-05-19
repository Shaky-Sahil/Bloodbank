import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors'
import generateUsers from '../Utilities/generateUsers.js';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logoutbar from './Logoutbar.jsx';

const Donorlist = () => {
     const [authenticated, setauthenticated] = useState(null);
    const [users,setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        setUsers(generateUsers())
        const loggedInUser = localStorage.getItem("authenticated");
        setauthenticated(loggedInUser)
    },[])
    if(!authenticated){
        return(
            <div>
                log in to view dashboard
            </div>
        )
    }
    else{
        return (
            <div className='cont'>
                <Logoutbar/>
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
                            <Button 
                            className='btn'
                            onClick={()=>{navigate("/request")}} 
                            sx={{ width: 150, height: 25,bgcolor: '#b71c1c' }} 
                            variant='contained' 
                            color='warning'>
                                request
                             </Button>
                        </CardContent>
                    </Card>
                    </Grid>
                )
                )}
                </Grid>
            </div>
          )
    }
  
}

export default Donorlist
