
import './Create.css'
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react'
import { useForm } from 'react-hook-form';
  

const Create = () => {
    const {register,handleSubmit} = useForm ();
    const getval = (val) => {
        alert("Form Submitted")
        console.log(val)
        
    }



    
        
    
  return (
    <div className='req' >
        <Typography 
        variant='h2' 
        sx={{flexGrow: 2}} 
        fontFamily={"Bold"}
         fontSize={35}a
         color="red">
            BLOOD DONATION FORM
        </Typography>
      <Stack

      sx={{
        marginLeft : '43%',
        marginTop : 10,
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      >
        <TextField
          hiddenLabel
          name='Name'
          {...register("Name")}
          id="filled-hidden-label-small"
          label = "Name"
          variant="outlined"
          
        />
        <TextField
          hiddenLabel
          name='Age'
          {...register("Age")}
          id="filled-hidden-label-normal"
          variant="outlined"
          label = "Age"
        />
          <TextField
          hiddenLabel
          name='Email'
          {...register("Email")}
          id="filled-hidden-label-normal"
          variant="outlined"
          label = "Email"
        />
        <TextField
          hiddenLabel
          name='Phone number'
          {...register("Phone number")}
          id="filled-hidden-label-normal"
          variant="outlined"
          label = "Phone number"
        />
         <TextField
          hiddenLabel
          name='Blood Type'
          {...register("Blood Type")}
          id="filled-hidden-label-normal"
          variant="outlined"
          label = "Blood Type"
        />
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Request Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="Request Category"
    
  >
    <MenuItem value={10}>Donor</MenuItem>
    <MenuItem value={20}>Receiver</MenuItem>
  </Select>
</FormControl>
      <TextField
          hiddenLabel
          name='pre ailments'
          {...register("pre ailments")}
          id="filled-hidden-label-normal"
          variant="outlined"
          label = "Predefined ailments,if any"
        />
        <TextField
          hiddenLabel
          name='units of blood'
          {...register("units of blood")}
          id="filled-hidden-label-normal"
          variant="outlined"
          label = "Units of blood required,if receiver"
        />
        



       
        
    

        <Button 
        variant='contained' onClick={handleSubmit(getval)}>Submit
        </Button>
        <br></br>
        <br></br>
        
      </Stack>
    

      
      </div>
    )
  }


  
  export default Create
  
  