import { Button, Container, Typography} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import PlanetList from './PlanetList'

function Intro() {

    const [start, setStart] = useState(false)

    const startHandler = () => {
            
        setStart(true)
    }
    if(start) return <PlanetList />
    
  return (
    <Container sx={{
        height: '100vh',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Typography variant='h1' 
        sx={{
            width:'100vw',
            textAlign:'center', 
            fontWeight: 700}}>
            STAR WARS
        </Typography>
        <Typography variant='h6'>
            The Planet Index
        </Typography>
        <Button sx={{
            backgroundColor: 'black',
            color: 'white',
            width: '30%',
            marginTop: '2rem',
            '&:hover': {
                backgroundColor: 'black',
                transform: 'scale(1.2)'
            }
        }}
        onClick={() => startHandler() }>
            START
        </Button>
    </Container>
  )
}

export default Intro