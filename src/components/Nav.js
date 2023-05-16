import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import './Nav.css'
export default function Nav() {
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
            Dashboard
          </Typography>
          <Link to={'/Login'} className='Log'><Button color='error' variant="filled" sx={{textDecoration:'none'}}>Login</Button></Link>
          <Link to={'/SignUp'} className='Sign'><Button color='error' variant='filled'>SignUp</Button></Link>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}