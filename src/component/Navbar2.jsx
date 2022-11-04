import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 240;

const Navbar2 = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
       };
  return (
    <>
    <AppBar
        position="fixed"
        sx={{
            // backgroundColor:"red",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },backgroundColor:'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          LIQUOR STORE
          </Typography>
        </Toolbar>
      </AppBar>
      </>
  )
}

export default Navbar2