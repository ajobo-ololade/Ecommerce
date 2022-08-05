import { Grid, ListItem } from '@mui/material'
import React from 'react'
import first from "../assets/ice.jpg"

const Section2 = () => {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6}>


                    <img src={first} alt="wine" style={{ width: "600px", height: "400px" }} />


                </Grid>
                <Grid item xs={6}>
                    <em className='text-danger'>Since 1905</em>
                    <h1>Desire Meets A New Taste</h1>
                    <p className='param text-muted animate__animated animate__backInRight'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <p className="text-muted param animate__animated animate__backInRight">
                    On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
                    </p>

                    <h4 className='mt-5'><span className='text-danger'><em>115</em></span> Years of Experience In Business</h4>
                </Grid>

            </Grid>
        </>

    )
}

export default Section2