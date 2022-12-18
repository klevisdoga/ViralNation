import { Button, Typography, Link } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'

function Header() {
  const [next, setNext] = useState(false)

  return (
    <Container sx={{
      backgroundColor: 'black',
      height: '100vh',
      color: 'white',
      paddingTop: '1rem',
      '@media': {
        padding: '1rem 0 1rem 0'
      }
    }}>
      <Container sx={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left'
      }}>
        <Typography variant='h6' sx={{ fontWeight: 700 }}>
          STAR WARS: <br /> THE PLANET INDEX
        </Typography>
      </Container>
      <Container sx={{ marginTop: '1rem' }}>
        <Container sx={{
          textAlign: 'center',
          border: '1px solid yellow',
          padding: '2rem',
          height: '80vh',
          display: 'flex',
          alignItems: 'center'
        }}>

          {!next ?
            <Container sx={{ width: '80%' }}>
              <Typography variant='h3' sx={{
                marginBottom: '1rem',
                fontFamily: 'Odibee Sans'
              }}>
                WELCOME TRAVELER,
              </Typography>
              <Typography variant='h5' sx={{
                fontFamily: 'Odibee Sans',
                textTransform: 'capitalize',
                letterSpacing: '.2rem',
                transition: '.5 ease-in-out'
              }}>
                Here we have an index of all the planets in the Star Wars Universe, including their name, climates, and population.
                This was done by making a query request to this "
                <Link
                  sx={{ color: 'yellow' }}
                  href='https://swapi-graphql.netlify.app/.netlify/functions/index'
                  target="_blank"
                  underline='none'
                >
                  endpoint
                </Link>".
              </Typography>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: 'yellow',
                  color: 'black',
                  width: '6rem',
                  marginTop: '4rem',
                  '&:hover': {
                    backgroundColor: 'white'
                  }
                }}
                onClick={() => setNext(true)}
              >
                NEXT
              </Button>
            </Container>

            :

            <Container sx={{ width: '80%' }}>
              <Typography variant='h3' sx={{
                marginBottom: '1rem',
                fontFamily: 'Odibee Sans'
              }}>
                On this journey you will be able to:
              </Typography>
              <Container sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: 8
              }}>
                <Button variant='contained' sx={{
                  backgroundColor: 'black',
                  width: '30%',
                  '&:hover': {
                    backgroundColor: 'yellow',
                    color: 'black'
                  }
                }}>
                  ADD
                </Button>
                <Button variant='contained' sx={{
                  backgroundColor: 'black',
                  width: '30%',
                  '&:hover': {
                    backgroundColor: 'yellow',
                    color: 'black'
                  }
                }}>
                  UPDATE
                </Button>
                <Button variant='contained' sx={{
                  backgroundColor: 'red',
                  width: '30%',
                  '&:hover': {
                    backgroundColor: 'red'
                  }
                }}>
                  DELETE
                </Button>
              </Container>
              <Typography variant='h5' sx={{
                fontFamily: 'Odibee Sans',
                textTransform: 'capitalize',
                letterSpacing: '.2rem',
                transition: '.5 ease-in-out',
                marginTop: '3rem'
              }}>
                To get started, <br /> scroll down and click "ADD" or select any of the existing planets.
              </Typography>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: 'yellow',
                  color: 'black',
                  width: '6rem',
                  marginTop: '4rem',
                  '&:hover': {
                    backgroundColor: 'white'
                  }
                }}
                onClick={() => setNext(false)}
              >
                BACK
              </Button>
            </Container>
          }

        </Container>
      </Container>
    </Container>
  )
}

export default Header