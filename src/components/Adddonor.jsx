import React, { useState } from 'react';
import "./Adddonor.css";
import { Button, Container, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Adddonor() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bloodType, setBloodType] = useState('');
  const {register, handleSubmit} = useForm()

  const donorAdd = (data) => {
    axios.post('http://localhost:5000/donor/new',data).then((res)=>{
      console.log(res)
    })
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
      <TextField className='cls2' label="Name" name='userName'
      {...register('userName')}
      />
      <TextField className='cls2' label="Age" name='userAge'
      {...register('userAge')}/>
      <TextField className='cls2' label="Email" name='userEmail'
      {...register('userEmail')}/>
      <TextField className='cls2' label="Phone Number" name='userPhone'
      {...register('userPhone')}/>
      <TextField className='cls2' label="Blood" name='bloodGroup'
      {...register('bloodGroup')}/>
      <br/>
<Button className='cls3' style={{backgroundColor:'crimson'}} type="submit" onClick={handleSubmit(donorAdd)}>Add Donor</Button>
</center>
</Container>
</form>
</div>
);
}
export default Adddonor;