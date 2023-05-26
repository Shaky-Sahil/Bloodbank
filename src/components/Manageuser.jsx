import { Breadcrumbs, Button, Card, CardContent, Drawer, Grid, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors'
import generateUsers from '../Utilities/generateUsers.js';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logoutbar from './Logoutbar.jsx';
import { Toaster, toast } from 'react-hot-toast';

const Manageuser = () => {
     const [authenticated, setauthenticated] = useState(null);
    const [users,setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:5000/verified/requests').then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
        const loggedInUser = localStorage.getItem("authenticated");
        setauthenticated(loggedInUser)
    },[])

    const deleteUser = (id) => {
        const data ={_id : id};
        axios.post('http://localhost:5000/verified/request/delete',data).then(()=>{
            toast.success("user deleted")
            let value = users.filter((u)=>(u._id!==id))
            setUsers(value)
        })
    }

    if(!authenticated){
        return(
            <div>
                log in to Manage Users
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
                            <Typography>Name:{user.requestName}</Typography>
                            <Typography>Age:{user.requestAge}</Typography>
                            <Typography>Phone:{user.requestPhone}</Typography>
                            <Typography>Email:{user.requestEmail}</Typography>
                            <Typography>Ailments:{user.requestAilment}</Typography>
                            <Button 
                            className='btn' 
                            sx={{ width: 150, height: 25,bgcolor: '#b71c1c' }} 
                            variant='contained' 
                            color='warning'
                            onClick={()=>{navigate('/user/update',{
                                state: {
                                    user
                                }
                            })}}
                            >
                                Update
                             </Button>
                             <Button 
                            className='btn' 
                            sx={{ width: 150, height: 25,bgcolor: '#b71c1c',marginLeft:2 }} 
                            variant='contained' 
                            color='warning'
                            onClick={()=>{deleteUser(user._id)}}
                            >
                                Delete
                             </Button>
                        </CardContent>
                    </Card>
                    </Grid>
                )
                )}
                </Grid>
                <Toaster/>
            </div>
          )
    }
  
}

export default Manageuser
