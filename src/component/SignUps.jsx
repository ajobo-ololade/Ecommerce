import React from 'react'
import { Box, Card, CardContent, Grid, TextField, Typography, FormControl, FormLabel, FormHelperText, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import vid from "../assets/vid.mp4"
import {useFormik} from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';


const SignUps = () => {
    
    const navigate = useNavigate()
   
    const {
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched,
        values,
        getFieldProps


    } = useFormik({
        initialValues:{
            email:'',
            firstName:'',
            lastName:"",
            phoneNumber:'',
            password:'',



        },
        onSubmit:(values)=>{
           navigate('/signin')
        
        },
        validationSchema:yup.object({
            firstName:yup.string().required(`Required Field`),
            lastName:yup.string().required(`Required Field`),
            email:yup.string().required(`Required Field`),
            phoneNumber: yup.string().required(`Required Field`),
            password:yup.string().required(`Required Field`),


        })
    })
  return (
    <>
   <form action="" onSubmit={handleSubmit} id=
   'myForm'>
   <div>
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="First Name"
                                        variant="standard"
                                        color="error"
                                        name='firstName'
                                        focused
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.firstName}

                                        // {...getFieldProps('firstName')}
                                            // helperText={touched.firstName && errors.firstName}
                                        
                                        
                                    />
                                    </div>
                                    {touched.firstName && <div className='text-warning' style={{fontSize:'10px'}}>{errors.firstName}</div>}
                                        <div>
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="Last Name"
                                        variant="standard"
                                        color="error"
                                        name='lastName'
                                        focused
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // {...getFieldProps('lastName')}
                                        // helperText={touched.lastName && errors.lastName}
                                        
                                    />
                                    {/* {/* helperText={touched.phoneNumber && <div className='text-warning' style={{fontSize:'10px'}}>{errors.phoneNumber}</div>} */}
                                    
                                    </div>
                                    {touched.lastName && <div className='text-warning' style={{fontSize:'10px'}}>{errors.lastName}</div>}
                                    <div>   
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="Phone Number"
                                        variant="standard"
                                        color="error"
                                        name='phoneNumber'
                                        type='number'
                                        focused
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // {...getFieldProps('phoneNumber')}
                                        // helperText={touched.phoneNumber && errors.phoneNumber}

                                    />
                                    </div>
                                    {touched.phoneNumber && <div className='text-warning' style={{fontSize:'10px'}}>{errors.phoneNumber}</div>}
                                    <div>
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="Email"
                                        variant="standard"
                                        name='email'
                                        color="error"
                                        focused
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // {...getFieldProps('email')}
                                        // helperText={touched.email && errors.email}

                                    />
                                    </div>
                                    {touched.email && <div className='text-warning' style={{fontSize:'10px'}}>{errors.email}</div>}
                                    <Button
                                    type='submit'
                                    form ="myForm"
                                     variant="contained"
                                     color="error"
                                    
                                     sx={{ backgroundColor: "red", color: "white" }}>
                                        Sign Up
                                    </Button>
   </form>
                                
    </>
  )
}

export default SignUps