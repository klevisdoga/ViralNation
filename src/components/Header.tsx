import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function Header() {
  return (
    <Container sx={{
        width:'100%',
        height:'8rem',
        background:'black',
        color:'white',
        marginTop:'2rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
        <Typography variant='h3'>
            STAR-WARS: THE PLANET INDEX
        </Typography>
    </Container>
  )
}

export default Header