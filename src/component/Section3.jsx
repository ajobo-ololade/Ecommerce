import { Box, Grid } from '@mui/material'
import React from 'react'
import first from "../assets/1.jpg"


const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  // border: 1,
  width: '10rem',
  height: '10rem',
};

const Section3 = () => {
  return (
   <>
   <Grid>
   <Box sx={{ display: 'flex', justifyContent: 'center',marginTop:"40px" }} className="first">
      <Box sx={{ ...commonStyles, borderRadius: '50%' }} className="first-1"/>
      <Box sx={{...commonStyles, borderRadius: "50%" }} className="first-2" />
      <Box sx={{...commonStyles, borderRadius: '50%' }} className="first-3" />
      <Box sx={{...commonStyles, borderRadius: '50%' }} className="first-4" />
      <Box sx={{ ...commonStyles,borderRadius: '50%' }} className="first-5" />
      <Box sx={{...commonStyles, borderRadius: '50%' }} className="first-6" />
    </Box>
   </Grid>
   </>
  )
}

export default Section3