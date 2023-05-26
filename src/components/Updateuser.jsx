import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Updateuser = () => {
  const {register, handleSubmit} = useForm()
  const handleUpdate = () => {

  }
  return (
    <div>
       <div className='update'>
      
          <Typography component="h1" variant="h5">
            Update User
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="userfName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("userfName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="userlName"
                  autoComplete="family-name"
                  {...register("userlName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                    select
                    fullWidth
                    id='gender'
                    label='Gender'
                    name='gender'
                    {...register('gender')}
                  >
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                    <MenuItem value='other'>Other</MenuItem>
                  </TextField>
                </Grid>
                   <Grid item xs={12} sm={6}>
                <TextField
                  required='>18'
                  fullWidth
                  id="Age"
                  label="Age"
                  name="Age"
                  {...register("userAge")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("userEmail")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("userPassword")}
                />
              </Grid>
      
            </Grid>
            <Button className='button'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='error'
              onClick={handleSubmit(handleUpdate)}
            >
              Sign Up
            </Button>
            <Toaster/>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/Login'}href="#" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
           
          </Box>
    </div>
    </div>
  )
}

export default Updateuser
 