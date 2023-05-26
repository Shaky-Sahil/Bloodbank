import { Breadcrumbs, Button, Card, CardContent, Drawer, Grid, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors'
import generateUsers from '../Utilities/generateUsers.js';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logoutbar from './Logoutbar.jsx';
import axios from 'axios';
import './requestlist.css'
import SendIcon from '@mui/icons-material/Send';

const Requestlist = () => {
    const [requests,setRequests] = useState([])
     const [authenticated, setauthenticated] = useState(null);
    const subject = "Blood Donation"
    const navigate = useNavigate()

    useEffect(()=>{
      const loggedInUser = localStorage.getItem("authenticated");
      setauthenticated(loggedInUser)
      axios.get('http://localhost:5000/requests').then((response)=>{
          console.log(response.data)
          setRequests(response.data)
      })
  },[])

  if(!authenticated){
    return(
        <div>
            log in to view requests
        </div>
    )
}
else if(requests===null){
    return(
        <div>
            no requests
        </div>
    )
}
else{
    return (
        <div className='cont'>
            <Logoutbar/>
            <center>
            <Typography variant='h3'>Requests</Typography>
            </center>
            <Grid container>
            {requests.map((req,i)=>(
                <Grid item xs={4} key={i}>
                <Card sx={{bgcolor: '#ffebee',borderRadius:4,margin:1}}>
                    <CardContent>
                        <Typography>Name:{req.requestName}</Typography>
                        <Typography>Age:{req.requestAge}</Typography>
                        <Typography>Blood:{req.requestBlood}</Typography>
                        <Typography>Units:{req.requestUnit}</Typography>
                        <Typography>Email:{req.requestEmail}</Typography>
                        <Typography>Phone:{req.requestPhone}</Typography>
                        <Button 
                        className='btn'
                        sx={{ width: 150, height: 25,bgcolor: '#b71c1c' }} 
                        variant='contained' 
                        color='warning'>
                            <SendIcon/>
                             <a href={`mailto:${req.requestEmail}?subject=Blood donation`}>send email</a>
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

export default Requestlist
