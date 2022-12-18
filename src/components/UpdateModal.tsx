import { Button, FormControl, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { Container } from '@mui/system';

interface Props {
  setUpdateModal(arg: boolean): void;
  setPlanets(arg: any): void;
  planets: any;
  planetId: string
}

const UpdateModal: React.FC<Props> = (props) => {
  const[currentPlanet, setCurrentPlanet] = useState(props.planets.filter((i: any) => i.id === props.planetId))
  const [name, setName] = useState(currentPlanet[0].name);
  const [climate, setClimate] = useState(currentPlanet[0].climates);
  const [population, setPopulation] = useState(currentPlanet[0].population);

  const handleSubmit = () => {

    const planetIndex = props.planets.indexOf(currentPlanet[0]);

    const newArr = [...props.planets];
    const updatedPlanet = {
      __typename: 'Planet',
      name,
      climates: [Array(climate.toString())],
      population,
      id: uuid()

    };

    newArr.splice(planetIndex, 1, updatedPlanet);
    props.setPlanets(newArr);
    props.setUpdateModal(false)

    return;
  };

  const handleDelete = () => {
    const newData = props.planets.filter((i: any) => i !== currentPlanet[0])

    props.setPlanets(newData)
    props.setUpdateModal(false);
  }

  return (
    <Container sx={{
      position: 'fixed',
      left: '0',
      right: '0',
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, .8)',
      height: '100%',
      width: '100%',
      zIndex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container sx={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '60%',
        margin: '0 auto',
        borderRadius: 12,
        position:'relative'
      }}>
      <CloseIcon sx={{
        position:'absolute',
        left:'2rem',
        top:'2rem',
        cursor:'pointer',
        color:'black'
      }}
      onClick={() => props.setUpdateModal(false)}/>
      <Typography variant='h3'>
        Planet: {currentPlanet[0].name}
      </Typography>
      <Typography variant='h5'>
        Climates: {currentPlanet[0].climates}
      </Typography>
      <Typography variant='h5' sx={{marginBottom:'3rem'}}>
        Population: {currentPlanet[0].population}
      </Typography>
      <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField
          label="Name"
          defaultValue={currentPlanet[0].name}
          placeholder={currentPlanet.name}
          onChange={(event) => setName(event.target.value)}
          required
          sx={{
            marginBottom:'1rem'
          }}
        />
        <TextField
          label="Climate"
          defaultValue={currentPlanet[0].climates}
          onChange={(event) => setClimate(event.target.value)}
          required
          sx={{
            marginBottom:'1rem'
          }}
        />
        <TextField
        label="Population"
          type="number"
          defaultValue={currentPlanet[0].population}
          onChange={(event) => setPopulation(Number(event.target.value))}
          required
          sx={{
            marginBottom:'1rem'
          }}
        />
        <Container sx={{
          display:'flex',
          width: '20rem',
          justifyContent: 'space-between'
        }}>
          <Button variant='contained' onClick={() => handleSubmit()} sx={{backgroundColor:'black'}}>Update</Button>
          <Button onClick={() => handleDelete()} variant='contained' sx={{backgroundColor:'red'}}>Delete</Button>
        </Container>
      </FormControl>
    </form>
      </Container>
    </Container>
  )
}

export default UpdateModal