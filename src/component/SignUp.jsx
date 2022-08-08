import { Box, Card, CardContent, Grid, TextField, Typography, FormControl, FormLabel, FormHelperText, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import vid from "../assets/vid.mp4"

const SignUp = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
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
                    <Typography variant="h4" color="initial" sx={{ padding: "20px" }}> Sign Up </Typography>
                    <CardContent>

                        <FormControl>
                            <Box
                                component="form"
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
                                        label="First Name"
                                        variant="standard"
                                        color="error"
                                        focused
                                    />

                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Last Name"
                                        variant="standard"
                                        color="error"
                                        focused
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Phone Number"
                                        variant="standard"
                                        color="error"
                                        focused

                                    />

                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Email"
                                        variant="standard"
                                        color="error"
                                        focused

                                    />
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" color="error"
                                        focused>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            color="error"
                                            focused
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
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


                                    </FormControl>
                                    <Button variant="contained" color="error" sx={{ backgroundColor: "red", color: "white" }}>
                                        Sign Up
                                    </Button>
                                </div>
                            </Box>
                        </FormControl>

                    </CardContent>

                </Card>


            </Grid>
        </>
    )
}

export default SignUp