import React, { useState } from 'react';
import "./Adddonor.css";
import { Button, Container, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

function Adddonor() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bloodType, setBloodType] = useState('');
  const {register, handleSubmit} = useForm()

  const donorAdd = event => {
    axios.post()
  };

  return (
    <div className='cls4'>
    <form onSubmit={handleSubmit} className='cls1'>
    <br/>
    <br/>
    
    <Container className='con' sx={{height:470}}>
    <br/>
    <br/>
      <center>
      <Typography  variant='h4'>ADD DONORS</Typography>
      
      <br/>
      <TextField className='cls2' label="Name" value={name} 
      {...register()}
      />
      <TextField className='cls2' label="Age" value={age}  />
      <TextField className='cls2' label="Email" value={email}  />
      <TextField className='cls2' label="Phone Number" value={phoneNumber}  />
      <TextField className='cls2' label="Blood" value={bloodType}  />
      <br/>
<Button className='cls3' style={{backgroundColor:'crimson'}} type="submit">Add Donor</Button>
</center>
</Container>
</form>
</div>
);
}
export default Adddonor;