import './Req.css';
import {  Box, Button, Card, CardActions, CardContent, Container, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react'
import { Select } from '@mui/material';
import { Opacity } from '@mui/icons-material';






const Request = () => {

    
        
  return (
    <div className='req'>
        <Container component="main"  sx={{opacity:1.0,height:700,width:550}} className='Con'> 
    {/* <Box 
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > */}
      <Card sx={{ backgroundColor:'transparent'  , minWidth: 20, height:700, width:550, marginLeft:-3, marginTop:3 }} className='card' >
      <CardContent>
      
        <Typography sx={{ fontSize: 26, fontFamily:'cursive', textDecoration:'underline'}} color="brown" gutterBottom>
          Request Form
        </Typography>
        <br/>
        <TextField required sx={{marginLeft:0, marginTop:4 }}variant="standard" label="Name" size="normal" />
        <TextField required sx={{marginLeft:-24, marginTop:12 }}variant="standard" label="Age" size="normal" />
        <TextField required sx={{marginLeft:-24, marginTop:20 }}variant="standard" label="Email ID" size="normal" type='email' />
        <TextField required sx={{marginLeft:-24, marginTop:28 }}variant="standard" label="Phone No" size="normal"  />
        <Typography sx={{marginLeft:-20, marginTop:5}}>Blood Type requested/donating :</Typography>
        <TextField required sx={{marginLeft:35, marginTop:-6 }}variant="standard" label="Blood type" size="normal" />

        <Select 
                    sx={{
                        
       marginTop:1,        
          width: 180,
          height: 50,
          marginLeft: 30
        }}
      >
        <MenuItem value={1}>Donor</MenuItem>
        <MenuItem value={2}>Receiver</MenuItem>
    </Select>
    <Typography sx={{marginLeft:-32, marginTop:-5}}>Request Category :</Typography>
    <Typography sx={{marginLeft:-32, marginTop:6}}>Pre-defined ailments, if any :</Typography>
    <TextField sx={{marginLeft:35, marginTop:-3}}   />
    <Typography sx={{marginLeft:-21, marginTop:4}}>No: of units of blood required, if receiver:</Typography>
    <TextField sx={{marginLeft:46, marginTop:-5 }}variant="standard" label="Units of Blood" size="small" />
        
        
      
      </CardContent>
      <CardActions>
        <Button variant='contained' sx={{marginLeft:30, marginTop:-3}}>Submit</Button>
      </CardActions>
    </Card>
    {/* </Box> */}
    </Container>
    
    </div>
  )
}

export default Request