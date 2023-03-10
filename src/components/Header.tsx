import { Button, Typography, Link } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'

interface Props {
  setOpen: any
}

function Header(props: any) {
  const [next, setNext] = useState(false)

  return (
    // ----- Header -----
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
          {/* ----- HERO ----- */}
          {!next ?
            <Container sx={{ width: '80%' }}>
              <Typography variant='h3' sx={{
                marginBottom: '1rem',
                fontFamily: 'Odibee Sans',
                '@media (max-width: 414px)': {
                  fontSize: '3rem'
                },
                '@media (min-width: 1280px)': {
                  fontSize: '6rem'
                }
              }}>
                WELCOME TRAVELER,
              </Typography>
              <Typography variant='h5' sx={{
                fontFamily: 'Odibee Sans',
                textTransform: 'capitalize',
                letterSpacing: '.2rem',
                transition: '.5 ease-in-out',
                '@media (max-width: 414px)': {
                  fontSize: '1rem'
                },
                '@media (min-width: 1280px)': {
                  fontSize: '2rem'
                }
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
                  },
                  '@media (min-width: 1280px)': {
                    fontSize: '1rem',
                    width: '10rem'
                  }
                }}
                onClick={() => setNext(true)}
              >
                NEXT
              </Button>
            </Container>

            :

            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
              <Container sx={{ width: '100%' }}>
                <Typography variant='h3' sx={{
                  marginBottom: '1rem',
                  fontFamily: 'Odibee Sans',
                  '@media (max-width: 414px)': {
                    fontSize: '2rem'
                  },
                  '@media (min-width: 1280px)': {
                    fontSize: '6rem',
                    marginBottom: '4rem'
                  }
                }}>
                  On this journey you will be able to:
                </Typography>
              </Container>
              <Container sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: 8,
                '@media (min-width: 1280px)': {
                  padding: '1rem',
                  width: '50%'
                }
              }}>
                <Button variant='contained' sx={{
                  backgroundColor: 'black',
                  width: '30%',
                  '&:hover': {
                    backgroundColor: 'yellow',
                    color: 'black'
                  },
                  '@media (max-width: 414px)': {
                    fontSize: '.5rem',
                    width: '2rem'
                  },
                  '@media (min-width: 1280px)': {
                    fontSize: '1rem',
                    width: '30%'
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
                  },
                  '@media (max-width: 414px)': {
                    fontSize: '.5rem',
                    width: '2rem'
                  },
                  '@media (min-width: 1280px)': {
                    fontSize: '1rem',
                    width: '30%'
                  }
                }}>
                  UPDATE
                </Button>
                <Button variant='contained' sx={{
                  backgroundColor: 'red',
                  width: '30%',
                  '&:hover': {
                    backgroundColor: 'red'
                  },
                  '@media (max-width: 414px)': {
                    fontSize: '.5rem',
                    width: '2rem'
                  },
                  '@media (min-width: 1280px)': {
                    fontSize: '1rem',
                    width: '30%'
                  }
                }}>
                  DELETE
                </Button>
              </Container>
              <Container>
                <Typography variant='h5' sx={{
                  fontFamily: 'Odibee Sans',
                  textTransform: 'capitalize',
                  letterSpacing: '.2rem',
                  transition: '.5 ease-in-out',
                  marginTop: '3rem',
                  '@media (max-width: 414px)': {
                    fontSize: '1rem'
                  },
                  '@media (min-width: 1280px)': {
                    fontSize: '2rem',
                    marginTop: '4rem'
                  }
                }}>
                  To get started: <br /><br /> select "CLOSE" <br /> then click on any of the existing planets or add a new planet.
                </Typography>
                <Container sx={{
                  width: '40%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  '@media (max-width: 414px)': {
                    width: '100%'
                  }
                }}>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: 'yellow',
                      color: 'black',
                      width: '6rem',
                      marginTop: '4rem',
                      '&:hover': {
                        backgroundColor: 'white'
                      },
                      '@media (min-width: 1280px)': {
                        fontSize: '1rem',
                        width: '10rem'
                      },
                      '@media (max-width: 414px)': {
                        width: '5rem'
                      }
                    }}
                    onClick={() => setNext(false)}
                  >
                    BACK
                  </Button>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: 'yellow',
                      color: 'black',
                      width: '6rem',
                      marginTop: '4rem',
                      '&:hover': {
                        backgroundColor: 'white'
                      },
                      '@media (min-width: 1280px)': {
                        fontSize: '1rem',
                        width: '10rem'
                      },
                      '@media (max-width: 414px)': {
                        width: '5rem'
                      }
                    }}
                    onClick={() => props.setOpen(false)}
                  >
                    CLOSE
                  </Button>

                </Container>
              </Container>
            </Container>
          }

        </Container>
      </Container>
    </Container >
  )
}

export default Header