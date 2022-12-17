import React, { useState, useEffect } from 'react';
import '../styles/PlanetList.css'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import {
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import AddModal from './AddModal';
import UpdateModal from './UpdateModal';
import { Container } from '@mui/system';

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Container sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem'
            }}>
                <Button variant='contained' sx={{
                    backgroundColor: 'black',
                    width: '50%',
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
                        width: 200
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