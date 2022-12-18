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
    Pagination,
    Menu,
    MenuItem,
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

    const [showModal, setShowModal] = useState(false); //Modal state for "Add"
    const [showUpdateModal, setUpdateModal] = useState(false); //Modal state for "Update/Delete"

    // State containing fetched Data(Planets) and the "ID" of the selected planet
    const [planets, setPlanets] = useState([]);
    const [planetId, setPlanetId] = useState('');

    // State for the pagination component
    const [currentPage, setCurrentPage] = useState(1);
    const [planetsPerPage, setPlanetsPerPage] = useState(10);

    // State for the "planets per page" dropdown menu
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

    useEffect(() => {
        if (data) setPlanets(data.allPlanets.planets);
    }, [data]);

    if (loading)
        return (
            <Container sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress color="inherit" />
            </Container>
        );
    if (error) return <Typography>Error: {error.message}</Typography>

    const handleMenuItemClick = (numPlanets: number) => {
        setMenuAnchorEl(null);
        setPlanetsPerPage(numPlanets);
        setCurrentPage(1);
    };

    // Calculate the number of pages needed for the pagination component
    const numberOfPages = Math.ceil(planets.length / planetsPerPage);

    // Get the current page of planets to display
    const indexOfLastPlanet = currentPage * planetsPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
    const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

    return (
        <Container id='planet-list' sx={{ '@media': { padding: "0" } }}>
            <Header />
            <Typography 
            variant='h5' 
            sx={{ 
                marginTop: '3rem', 
                textAlign: 'center',
                '@media (min-width: 1280px)': {
                    fontSize:'3rem'
                }
                }}>
                Let's begin.
            </Typography>
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
                    '&:hover': {
                        backgroundColor: 'yellow',
                        color: 'black'
                    },
                    '@media (min-width: 1280px)': {
                        fontSize:'1rem'
                    }
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
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Pagination
                    count={numberOfPages}
                    page={currentPage}
                    onChange={(event, page) => setCurrentPage(page)}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                />
                <Button
                    aria-controls="planets-per-page-menu"
                    aria-haspopup="true"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => setMenuAnchorEl(event.currentTarget)}>
                    Planets per page
                </Button>
                <Menu
                    id="planets-per-page-menu"
                    anchorEl={menuAnchorEl}
                    keepMounted
                    open={Boolean(menuAnchorEl)}
                    onClose={() => setMenuAnchorEl(null)}
                >
                    <MenuItem onClick={() => handleMenuItemClick(10)}>10</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick(20)}>20</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick(30)}>30</MenuItem>
                </Menu>
            </Container>

            <List sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                padding: '1rem'
            }}>
                {currentPlanets.map((planet: any) => (
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
                                        Population: {planet.population}
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
        </Container>
    );
}