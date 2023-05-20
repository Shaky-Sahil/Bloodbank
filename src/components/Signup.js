import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignUp.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const theme = createTheme();

 function Signup() {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const handleSignup = (data) => {
    axios.post('http://localhost:5000/api/users',data).then((response)=>{
      console.log(response)
      navigate("/Login");
    }).catch(()=>{
      toast.error('Invalid Data');
      console.log("something went wrong")
      navigate("/SignUp")
    })
  }

  return (
    <div className='SignUp'>
      
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{opacity:1.0}}>
    
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
                  fullWidth
                  id="Gender"
                  label="Gender"
                  name="Gender"
                  {...register("userGender")}
                />
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
              onClick={handleSubmit(handleSignup)}
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
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}
export default Signup;