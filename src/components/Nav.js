import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
<<<<<<< HEAD



=======
import { Link } from 'react-router-dom'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import './Nav.css'
import { Person, PersonAdd } from '@mui/icons-material';
>>>>>>> a367727a9d6e85dc5b2047c82dc55d106a05f6b8
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
<<<<<<< HEAD
            
          </Typography>
          <Button color='error' variant="contained">Login</Button>
          <Button color='error' variant='contained'>SignUp</Button>
         
=======
            Blood Bank Management System
          </Typography>
          <Link to={'/Login'} className='Log'><Button color='error' variant="filled" sx={{textDecoration:'none'}} startIcon={<Person />}>Login</Button></Link>
          <Link to={'/SignUp'} className='Sign'><Button color='error' variant='filled' startIcon={<PersonAdd />}>SignUp</Button></Link>
>>>>>>> a367727a9d6e85dc5b2047c82dc55d106a05f6b8
        </Toolbar>
      </AppBar>
    </Box>
  );
}
