import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./AdminDashboard"
import AdminDashboard from './AdminDashboard';
import Grid from '@mui/material/Grid'
import { Box, Typography } from '@mui/material';



const Variation = () => {
   
  return (
   <>
   
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
     
   </Grid>
    


   </>
  )
}

export default Variation