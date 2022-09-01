import { TextFields } from '@mui/icons-material'
import { Box, Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import './styleMe.css'
import NavBar from './NavBar'
import Variation from './Variation'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const AdminDashboard = () => {
 
    const [size, setsize] = React.useState('');
  
    const handleChange = (event) => {
      setsize(event.target.value);
    };
  
  return (
   <>
   <NavBar/>
   <Grid container >
   <Grid item xs={12} md={4} sx={{marginTop:"100px",marginLeft:{xs:"30px",sm:"300px"}}}>
    <Box sx={{backgroundColor:"skyblue", height:'100px',borderRadius:"30px"  }}>
      <Typography
       variant="body1" 
       color="initial"
       sx={{fontFamily:"Source Code Pro", padding:"10px",}}>
        Total no of Registered customers
      </Typography>

    </Box>
  
        
      </Grid>
      <Grid item xs={12} md={4} sx={{marginLeft:"30px",marginTop:{xs:"20px",sm:"100px"} }} >
      <Box sx={{backgroundColor:"skyblue", height:'100px',borderRadius:"30px"}}>
      <Typography
       variant="body1" 
       color="initial"
       sx={{fontFamily:"Source Code Pro", padding:"10px",}}>
        Total No of Pending orders
      </Typography>
      
      </Box>
  
        
  </Grid>

  <Grid item xs={12} md={4} sx={{marginTop:"20px",marginLeft:{xs:"30px",sm:"300px"}}}>
    <Box sx={{backgroundColor:"skyblue", height:'100px',borderRadius:"30px"  }}>
      <Typography
       variant="body1" 
       color="initial"
       sx={{fontFamily:"Source Code Pro", padding:"10px",}}>
        Total No Products availalable for sale
      </Typography>

    </Box>
  
        
      </Grid>
      <Grid item xs={12} md={4} sx={{marginTop:"20px",marginLeft:"30px" }} >
      <Box sx={{backgroundColor:"skyblue", height:'100px',borderRadius:"30px"}}>
      <Typography
       variant="body1" 
       color="initial"
       sx={{fontFamily:"Source Code Pro", padding:"10px",}}>
        Total amount of Product ordered
      </Typography>
      </Box>
  
        
  </Grid>
  <Grid item xs={12} md={8} sx={{marginTop:"20px",marginLeft:{xs:"30px",sm:"300px"} }}>
    <Box sx={{backgroundColor:'ash',height:'auto',borderRadius:'50px','& .MuiTextField-root': { m: 1, width: '25ch' },padding:'40px' }}>
    <TextField
        color='error'
        id=""
        label="Name"
       
        
      />
        

      <TextField
        id=""
        label="Price"
        type='number'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          ),
        }}
        // variant="standard"
        
      />
      <TextField
        id=""
        label=" Flavours"
       
        
      />
      <TextField
        id=""
        label=" Year of Production"
        
        
      />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={size}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>35cl</MenuItem>
          <MenuItem value={20}>75cl</MenuItem>
          <MenuItem value={30}>1 ltr</MenuItem>
        </Select>
      </FormControl>
      <Variation/>
      
      <Button
      variant='contained'
      color="secondary"
      size='large'>
        Set Product
      </Button>
      

    </Box>

  </Grid>


   
     
   </Grid>
   </>
  )
}

export default AdminDashboard

