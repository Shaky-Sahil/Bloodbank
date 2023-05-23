import React, { useState } from 'react';
import "./Adddonor.css";
import { Button, Container, TextField, Typography } from '@mui/material';

function Adddonor() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bloodType, setBloodType] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const donorData = { name, age, email, phoneNumber, bloodType };

    // Send donor data to the backend API using the fetch API
    fetch('/api/donors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donorData)
    }).then(() => {
      // Reset form fields after successful submission
      setName('');
      setAge('');
      setEmail('');
      setPhoneNumber('');
      setBloodType('');
    });
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
      <TextField className='cls2' label="Name" value={name} onChange={event => setName(event.target.value)} />
      <TextField className='cls2' label="Age" value={age} onChange={event => setAge(event.target.value)} />
      <TextField className='cls2' label="Email" value={email} onChange={event => setEmail(event.target.value)} />
      <TextField className='cls2' label="Phone Number" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
      <TextField className='cls2' label="Blood" value={bloodType} onChange={event => setBloodType(event.target.value)} />
      <br/>
<Button className='cls3' style={{backgroundColor:'crimson'}} type="submit">Add Donor</Button>
</center>
</Container>
</form>
</div>
);
}
export default Adddonor;