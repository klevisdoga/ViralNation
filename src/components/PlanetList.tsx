import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import {
    Button,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    Typography,
    Link
} from '@mui/material';
import AddModal from './AddModal';
import UpdateModal from './UpdateModal';
import { Container } from '@mui/system';
import Header from './Header';

const GET_PLANETS = gql`
  query GetPlanets {
    allPlanets {
      planets {
        name
        climates
        population
        id
      }
    }
  }
`;
export default function PlanetList() {
    const { loading, error, data } = useQuery(GET_PLANETS);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setUpdateModal] = useState(false);
    const [planets, setPlanets] = useState([]);
    const [planetId, setPlanetId] = useState('');

    useEffect(() => {
        if (data) setPlanets(data.allPlanets.planets)
    }, [data])

    if (loading) return (
        <Container sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress color="inherit" />
        </Container>
    )
    if (error) return <Typography>Error: {error.message}</Typography>;

    return (
        <>
        <Header />
        <Container sx={{
            marginTop: '4rem'
        }}>
            <Container sx={{textAlign:'center'}}>

            <Typography variant='h4' sx={{marginBottom:'1rem'}}>
                Welcome traveler,
            </Typography>
            <Typography>
                Here we have an index of all the planets in the Star-Wars Universe, including their name, climates, and population. This was done by making a query request to this <Link href='https://swapi-graphql.netlify.app/.netlify/functions/index'>endpoint</Link>.
            </Typography>
            <br/>
            <Typography sx={{marginBottom:'2rem'}}>
                On this journey you will be able to:
            </Typography>
            <Container sx={{
                display:'flex',
                width: '100%',
                justifyContent:'space-between'
            }}>
                <Button variant='contained' sx={{
                    backgroundColor: 'black',
                    width: '30%',
                    marginBottom: '2rem'
                }}>
                ADD
                </Button>
                <Button variant='contained' sx={{
                    backgroundColor: 'black',
                    width: '30%',
                    marginBottom: '2rem',
                }}>
                UPDATE
                </Button>
                <Button variant='contained' sx={{
                    backgroundColor: 'red',
                    width: '30%',
                    marginBottom: '2rem',
                    '&:hover': {
                        backgroundColor:'red'
                    }
                }}>
                DELETE
                </Button>
            </Container>
            
            </Container>
            <hr/>
            <Typography variant='h5' sx={{marginTop:'3rem', textAlign:'center'}}>
                Let's begin.
            </Typography>
            <Typography sx={{textAlign:'center'}}>
                Just click the "Add" button below or on any of the planets to get started.
            </Typography>
        </Container>
            <Container sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
            }}>
                
                <Button variant='contained' sx={{
                    backgroundColor: 'black',
                    width: '30%',
                    marginBottom: '2rem',
                }}
                    onClick={() => setShowModal(true)}>
                    ADD
                </Button>
                {showModal && <AddModal
                    setShowModal={setShowModal}
                    setPlanets={setPlanets}
                    planets={planets}
                />}
            </Container>
            <List sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {planets.map((planet: any) => (
                    <ListItem key={planet.id} sx={{
                        width: 200,
                        '&:hover': {
                            transform: 'scale(1.1)',
                            cursor: "pointer",
                            backgroundColor: 'rgba(225, 225, 225, .5)',
                            borderRadius: '12px'
                        }
                    }}
                        className='planet-container'
                        onClick={() => {
                            setUpdateModal(true)
                            setPlanetId(planet.id)
                        }
                        }
                    >
                        <ListItemText
                            primary={planet.name}
                            secondary={
                                <>
                                    <Typography variant="body2" component="span">
                                        Climates: {planet.climates}
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" component="span">
                                        Population: {planet.population || 'unknown'}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
                {showUpdateModal && <UpdateModal
                    setUpdateModal={setUpdateModal}
                    setPlanets={setPlanets}
                    planets={planets}
                    planetId={planetId}
                />}
            </List>
        </>
    );
}