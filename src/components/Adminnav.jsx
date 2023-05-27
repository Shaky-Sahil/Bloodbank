import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import './Nav.css'
import { useNavigate } from 'react-router-dom';
import { Person, PersonAdd } from '@mui/icons-material';
export default function Adminnav() {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='error' position="static">
        <Toolbar>
          <IconButton className='sty1'
            size="large" 
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         <BloodtypeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blood Bank Management System
          </Typography>
          <Button 
          onClick={()=>{navigate('/error')}}
          variant="contained"
          color='warning'
          sx={{ bgcolor: '#b71c1c',marginRight:2 }}>
            Admin Dash
          </Button>
          <Button onClick={()=>{
            localStorage.removeItem("authenticated")
            localStorage.removeItem("token")
            navigate('/')
        }}
        variant="contained"
        color='warning'
        sx={{ bgcolor: '#b71c1c' }} >
            Logout
        </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
