import { Box, Card, CardContent, Grid, TextField, Typography, FormControl, FormLabel, FormHelperText, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import vid from "../assets/vid.mp4"
import {useFormik} from "formik"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
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
            email:'',
            firstName:'',
            lastName:"",
            phoneNumber:'',
            password:'',



        },
        onSubmit:(values)=>{
            console.log(values)
           
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
            <Grid container sx={{ marginTop: "50px" }}>
                <video loop  autoPlay={"autoplay"} className='vid'>
                    <source
                        src={vid}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>



                <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "50px" }} className='cod'>
                    <Typography variant="h4" color="initial" sx={{ padding: "20px" }}> Sign Up </Typography>
                    
                        <CardContent>
                            
                        <form action="" onSubmit={formik.handleSubmit}>
                        
                            <Box
                                
                                
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' }, margin: "10px"
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="First Name"
                                        variant="standard"
                                        color="error"
                                        focused
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        {...formik.getFieldProps('firstName')}
                                        
                                        
                                    />
                                    </div>
                                    {formik.touched.firstName && <div className='text-warning' style={{fontSize:'10px'}}>{formik.errors.firstName}</div>}
                                        <div>
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="Last Name"
                                        variant="standard"
                                        color="error"
                                        focused
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        {...formik.getFieldProps('lastName')}
                                    />
                                    </div>
                                    {formik.touched.lastName && <div className='text-warning' style={{fontSize:'10px'}}>{formik.errors.lastName}</div>}
                                    <div>
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="Phone Number"
                                        variant="standard"
                                        color="error"
                                        type='number'
                                        focused
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        {...formik.getFieldProps('phoneNumber')}

                                    />
                                    </div>
                                    {formik.touched.phoneNumber && <div className='text-warning' style={{fontSize:'10px'}}>{formik.errors.phoneNumber}</div>}
                                    <div>
                                    <TextField
                                        // required
                                        id="standard-required"
                                        label="Email"
                                        variant="standard"
                                        color="error"
                                        focused
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        {...formik.getFieldProps('email')}

                                    />
                                    </div>
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
                                            onInput={handleChange('password')}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            {...formik.getFieldProps('password')}
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
                                    <Button variant="contained"
                                     color="error"
                                     type='submit'
                                     sx={{ backgroundColor: "red", color: "white" }}>
                                        Sign Up
                                    </Button>
                                
                            </Box>
                        
                        </form>
                        </CardContent>
                    

                </Card>


            </Grid>
        </>
    )
}

export default SignUp