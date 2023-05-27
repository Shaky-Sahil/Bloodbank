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
import { Toaster, toast } from 'react-hot-toast';
import Adminnav from './Adminnav.jsx';

const Managerequests = () => {
    const [requests,setRequests] = useState([])
     const [authenticated, setauthenticated] = useState(null);
    const subject = "Blood Donation"
    const navigate = useNavigate()

    useEffect(()=>{
      const loggedInUser = localStorage.getItem("authenticated");
      setauthenticated(loggedInUser)
      axios.get('http://localhost:5000/requests/donors').then((response)=>{
          console.log(response.data)
          setRequests(response.data)
      })
  },[])

  const delReq = (req) =>{
    console.log(req)
    axios.post("http://localhost:5000/request/delete",req).then((res)=>{
        console.log(res)
        toast.success("deleted successfully")
        let value = requests.filter((u)=>(u._id!==req._id))
        setRequests(value)
    }).catch(()=>{
        toast.error("something went wrong")
    })
  }

  const approveReq = (req) => {
    console.log(req)
    axios.post("http://localhost:5000/request/delete",req).then((res)=>{
        console.log(res)
        let value = requests.filter((u)=>(u._id!==req._id))
        setRequests(value)
    }).catch(()=>{
        toast.error("something went wrong")
    })
    
    axios.post("http://localhost:5000/verified/request/new",req).then((res)=>{
        console.log(res)
        let value = requests.filter((u)=>(u._id!==req._id))
        toast.success("request verified")
        setRequests(value)
    }).catch(()=>{
        toast.error("something went wrong")
    })
}


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
            <Adminnav/>
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
                        <Typography>Ailment:{req.requestAilment}</Typography>

                        <Button 
                        className='btn'
                        sx={{ width: 150, height: 25 }} 
                        variant='contained' 
                        color='success'
                        onClick={()=>{approveReq(req)}}>
                            Approve
                         </Button>

                         <Button 
                        className='btn'
                        sx={{ width: 150, height: 25,bgcolor: '#b71c1d',marginLeft:2 }} 
                        variant='contained' 
                        color='warning'
                        onClick={()=>{delReq(req)}}>
                            Delete
                         </Button>
                        
                    </CardContent>
                </Card>
                </Grid>
            )
            )}
            <Toaster/>
            </Grid>
        </div>
      )
  
}
}

export default Managerequests
