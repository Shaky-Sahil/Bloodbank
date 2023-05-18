import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';



export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='error' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Button color='error' variant='contained'>HOME</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color='error' variant="contained">Login</Button>
          <Button color='error' variant='contained'>SignUp</Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}