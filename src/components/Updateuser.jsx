import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Updateuser = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const location = useLocation();
  console.log('location',location)
  const user = location.state.user
  console.log(user.userfName)
  const handleUpdate = (data) => {
    data = {...data,_id:user._id}
    console.log(`request data is: ${data._id}`)
    axios.post('http://localhost:5000/verified/request/update',data).then((res)=>{
        console.log(res)
        toast.success("Updated user")
        navigate('/manage/user')
    })

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
                  name="requestName"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  {...register("requestName")}
                  defaultValue={user.requestName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Age"
                  label="Age"
                  name="requestAge"
                  autoComplete="family-name"
                  {...register("requestAge")}
                  defaultValue={user.requestAge}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                    select
                    fullWidth
                    id='email'
                    label='Email'
                    name='requestEmail'
                    {...register('requestEmail')}
                    defaultValue={user.requestEmail}
                  >
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                    <MenuItem value='other'>Other</MenuItem>
                  </TextField>
                </Grid>
                   <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="requestPhone"
                  {...register("requestPhone")}
                  defaultValue={user.requestPhone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  fullWidth
                  id="Blood"
                  label="Blood Group"
                  name="requestBlood"
                  {...register("requestBlood")}
                  defaultValue={user.requestBlood}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  fullWidth
                  id="ailment"
                  label="Ailment"
                  name="requestAilment"
                  {...register("requestAilment")}
                  defaultValue={user.requestAilment}
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
              Update
            </Button>
            <Toaster/>
           
          </Box>
    </div>
    </div>
  )
}

export default Updateuser
 