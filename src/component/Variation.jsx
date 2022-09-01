import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Variation = () => {
    const [category, setcategory] = React.useState('');

    const handleChange = (event) => {
      setcategory(event.target.value);
    }
  return (
   <>
    <div>
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
          <MenuItem value={10}> Rum</MenuItem>
          <MenuItem value={20}>Tequila</MenuItem>
          <MenuItem value={30}>Brandy</MenuItem>
          <MenuItem value={30}>Gin</MenuItem>
          <MenuItem value={30}>Whiskey</MenuItem>
        </Select>
        
      </FormControl>
      
       
    
    </div>
  


   </>
  )
}

export default Variation