import React from 'react'
import { useState } from 'react'
import { SwipeableDrawer, IconButton, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const SideBar = () => {
    const [drawer, setdrawer] = useState(false)
    return (
        <>
            <IconButton aria-label="open drawer" edge="start" onClick={() => setdrawer(true)}>
                <MenuIcon sx={{ color: "red", fontSize: "45px" }} />

            </IconButton>
            <SwipeableDrawer anchor='left' sx={{ width: "50%" }} open={drawer} onOpen={() => { }} onClose={() => setdrawer(false)}>
                <Grid container >
                    <Grid item xs={12} >

                        <h6 className='mt-5'>LIQUOR STORE</h6>
                        <hr />

                    </Grid>


                    <Grid item xs={12} sx={{ display: "grid", margin: "5" }}>
                        <Link to="" className="text-decoration-none mb-3 ms-3" style={{ color: "black" }}>HOME </Link>
                        <Link to="" className="text-decoration-none mb-3 ms-3" style={{ color: "black" }}>ABOUT </Link>
                        <Link to="" className="text-decoration-none mb-3 ms-3" style={{ color: "black" }}>BLOG</Link>
                        <Link to="" className="text-decoration-none mb-3 ms-3" style={{ color: "black" }}>CONTACT </Link>

                    </Grid>

                </Grid>

            </SwipeableDrawer>
        </>
    )
}

export default SideBar