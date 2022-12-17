import React from 'react'
import { Grid, Typography } from '@mui/material'
import PlanetList from './PlanetList'
import { Container, flexbox } from '@mui/system'

function Home() {

  return (
    <Grid container sx={{
        padding: '1rem'
    }}>
        <Typography variant='h1' sx={{width:'100vw', textAlign:'center'}}>Hello</Typography>
        <PlanetList />
    </Grid>
  )
}

export default Home