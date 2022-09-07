import { TextFields } from '@mui/icons-material'
import { Box, Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography, CardMedia } from '@mui/material'
import React from 'react'
import './styleMe.css'
import NavBar from './NavBar'
import Variation from './Variation'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react'
import axios from 'axios'


const AdminDashboard = () => {
  const url = "http://localhost:4004/admin/sproduct"
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [flavours, setflavours] = useState('')
  const [yearofP, setyearofP] = useState('')
  const [file, setfile] = useState('')

  const [category, setcategory] = React.useState('');

  const handleChange = (event) => {
    setcategory(event.target.value);
  }
 
    const [size, setsize] = React.useState('');
  
    const handleInput = (event) => {
      setsize(event.target.value);
    };
    
    const addProduct =()=>{
      const newProduct ={name,price,flavours,yearofP,category,size,file}
      if (name,price,flavours,yearofP,category,size) {
        axios.post(url,newProduct).then((res)=>{
          console.log(res)
        })
        
      }else{
        alert(`fill details`)
      }
    }
  const selectImage =(e)=>{
    const image = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload =()=>{
      setfile(reader.result)
    }
  }
  return (
   <>
   <NavBar/>
   <Grid container >
   <Variation/>
  <Grid item xs={12} md={8} sx={{marginTop:"20px",marginLeft:{xs:"30px",sm:"300px"} }}>
    <Box sx={{backgroundColor:'ash',height:'auto',borderRadius:'50px','& .MuiTextField-root': { m: 1, width: '25ch' },padding:'40px' }}>
    <TextField
        color='error'
        id=""
        label="Name"
       onChange={(e)=>setname(e.target.value)}
        
      />
        

      <TextField
        id=""
        label="Price"
        type='number'
        onChange={(e)=>setprice(e.target.value)}
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
        onChange={(e)=>setflavours(e.target.value)}
       
        
      />
      <TextField
        id=""
        label=" Year of Production * (optional)"
        onChange={(e)=>setyearofP(e.target.value)}
        
        
      />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={size}
          label="Size"
          onChange={handleInput}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"35cl" }>35cl</MenuItem>
          <MenuItem value={"75cl" }>75cl</MenuItem>
          <MenuItem value={"1ltr" }>1 ltr</MenuItem>
        </Select>
      </FormControl>
     

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Rum'}> Rum</MenuItem>
          <MenuItem value={'Tequila'}>Tequila</MenuItem>
          <MenuItem value={'Brandy'}>Brandy</MenuItem>
          <MenuItem value={'Gin'}>Gin</MenuItem>
          <MenuItem value={'Whiskey'}>Whiskey</MenuItem>
        </Select>
        
      </FormControl>
      <label >
        <input type="file"  onChange={(e)=>selectImage(e)} hidden />
        <p className='btn btn-outline-primary mt-3 ms-2'>Select an image</p>
      </label>
      <CardMedia title="image" image={file} sx={{width:'100px',height:"100px"}}/>
      {/* <TextField
        id=""
        label="Select Product Image"
        hidden
        type='file'
        onChange={(e)=>selectImage(e)}
        
        
      /> */}

      <div className='ms-3 mt-3'>
    <Button
      onClick={addProduct}
      variant='contained'
      color="secondary"
      size='large'>
        Add Product
      </Button>
    </div>
      

    </Box>
    

  </Grid>


   
     
   </Grid>
   </>
  )
}

export default AdminDashboard

