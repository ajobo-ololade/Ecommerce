import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {Typography,Grid, TextField }from '@mui/material'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'


const NavBar = () => {
  return (
    <>
    <AppBar position="fixed" color="primary" sx={{backgroundColor:"black",display:{xs:'none',sm:'block'}}} >
      <Toolbar>
        <Grid container sx={{display:"flex",justifyContent:"space-between"}}>
          <Grid item>
          <h4>LIQUOR STORE</h4>

          </Grid>
          <Grid item>
           <input type="text" className='form-control' placeholder='Search' />
          </Grid>
          <Grid item >
          <Link to="" className="text-decoration-none me-3" style={{color:"white"}}>HOME </Link>
          <Link to="" className="text-decoration-none me-3" style={{color:"white"}}>ABOUT</Link>
          <Link to="" className="text-decoration-none me-3" style={{color:"white"}}>BLOG </Link>
          <Link to="" className="text-decoration-none me-3" style={{color:"white"}}>CONTACT </Link>

          </Grid>
          
        </Grid>
        
        
      </Toolbar>
    </AppBar>


    <AppBar position="fixed" color="primary" sx={{backgroundColor:"black",display:{xs:'block',sm:'none'} }} >
      <Toolbar sx={{display:"flex", alignItems:"center"}}>
        <Grid container >
          <Grid item sx={{display:'flex', alignItems:"center"}}>
          <SideBar/>
          <h4 className='ms-5'>LIQUOR STORE</h4>
         

          </Grid>
          
          
        </Grid>
        
        
      </Toolbar>
    </AppBar>
    </>
  )
}

export default NavBar