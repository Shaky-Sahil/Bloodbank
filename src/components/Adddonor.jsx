import React, { useState } from 'react';
import "./Adddonor.css";
import { Button, Container, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Adminnav from './Adminnav';

function Adddonor() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bloodType, setBloodType] = useState('');
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const donorAdd = (data) => {
    axios.post('http://localhost:5000/verified/request/new',data).then((res)=>{
      console.log(res)
      toast.success("Donor Added")
      setTimeout(() => {
        navigate('/error')
      }, 1000);
     
    })
  };

  return (
    <div className='cls4'>
      <Adminnav/>
    <form onSubmit={handleSubmit} className='cls1'>
    <br/>
    <br/>
    
    <Container className='con' sx={{height:470}}>
    <br/>
    <br/>
      <center>
      <Typography  variant='h4'>ADD DONORS</Typography>
      
      <br/>
      <TextField className='cls2' label="Name" name='requestName'
      {...register('requestName')}
      />
      <TextField className='cls2' label="Age" name='requestAge'
      {...register('requestAge')}/>
      <TextField className='cls2' label="Email" name='requestEmail'
      {...register('requestEmail')}/>
      <TextField className='cls2' label="Phone Number" name='requestPhone'
      {...register('requestPhone')}/>
       <TextField
          select
          className='cls2'
          label='Blood'
          name='requestBlood'
          {...register('requestBlood')}
        >
          {bloodTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
       <TextField className='cls2' label="Ailment" name='requestAilment'
      {...register('requestAilment')} defaultValue={'None'}/>
      <br/>
<Button className='cls3' style={{backgroundColor:'crimson'}} type="submit" onClick={handleSubmit(donorAdd)}>Add Donor</Button>
</center>
</Container>
</form>
<Toaster/>
</div>
);
}
export default Adddonor;