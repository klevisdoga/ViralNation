import React from 'react'
import { Grid, Typography } from '@mui/material'
import PlanetList from './PlanetList'

function Home() {

  return (
    <Grid container sx={{
        padding: '1rem'
    }}>
        <Typography variant='h1' sx={{width:'100vw', textAlign:'center', fontWeight: 700}}>STAR WARS PLANETS</Typography>
        <PlanetList />
    </Grid>
  )
}

export default Home