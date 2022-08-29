import { Box, Button, Card, CardContent, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import vid from "../assets/vid.mp4"
import { useState } from 'react';
import {useFormik} from "formik"
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate()
    const [message, setmessage] = useState('')
    const [status, setstatus] = useState('')
    const url ="http://localhost:4004/user/signin"
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const formik = useFormik({
        initialValues:{
            email:"",
            password:''
        },
        onSubmit:(values)=>{
           axios.post(url,values).then((res)=> {
            // setstatus(res.data.status)
            setmessage(res.data.message)
            if(res.data.status){
                // setmessage(res.data.message)
                localStorage.token= res.data.token
                navigate('/dashboard')


            }
           })

        },
        validationSchema:yup.object({
            email:yup.string().required(`Required Field`),
            password:yup.string().required(`Required Field`),


        })
    })
  return (
   <>
   <Grid container sx={{ marginTop: "50px" }}>
                <video loop autoPlay className='vid'>
                    <source
                        src={vid}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>



                <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "50px" }} className='cod'>
                    <Typography variant="h4" color="initial" sx={{ padding: "20px" }}> Sign In </Typography>
                    <CardContent>

                        <form onSubmit={formik.handleSubmit}>
                        <p>{message}</p>
                            <Box
                            
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' }, margin: "10px"
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>

                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Email"
                                        variant="standard"
                                        color="error"
                                        focused
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        {...formik.getFieldProps('email')}

                                    />
                                    {formik.touched.email && <div className='text-warning' style={{fontSize:'10px'}}>{formik.errors.email}</div>}
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" color="error"
                                        focused>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            color="error"
                                            focused
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            {...formik.getFieldProps('password')}
                                            onInput={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    color="error"
                                                    focused
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        {formik.touched.password && <div className='text-warning' style={{fontSize:'10px'}}>{formik.errors.password}</div>}


                                    </FormControl>
                                    <Button 
                                    type='submit'
                                    variant="contained" 
                                    color="error" 
                                    sx={{ backgroundColor: "red", color: "white" }}>
                                        Sign In
                                    </Button>
                                    
                                </div>
                            </Box>
                        </form>

                    </CardContent>

                </Card>


            </Grid>
   </>
  )
}

export default SignIn