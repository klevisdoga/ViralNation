import { Button, Container, FormControl, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

interface Props {
  setShowModal(arg: boolean): void;
  setPlanets(arg: any): void;
  planets: any
}

const AddModal: React.FC<Props> = (props) => {
  const [name, setName] = useState('');
  const [climate, setClimate] = useState('');
  const [population, setPopulation] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newArr = [...props.planets];
    const newPlanet = {
      __typename: 'Planet',
      name,
      climates: [Array(climate.toString())],
      population,
      id: uuid()
    };

    newArr.unshift(newPlanet);

    props.setPlanets(newArr);
    props.setShowModal(false);
    
    return;
  };
  

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
      alignItems: 'center'
    }}>
      <Container sx={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        width: '80%',
        height: '80%',
        margin: '0 auto',
        borderRadius: 12,
        position: 'relative'
      }}>
      <CloseIcon sx={{
        position:'absolute',
        left:'2rem',
        top:'2rem',
        cursor:'pointer',
        color:'black'
      }}
      onClick={() => props.setShowModal(false)}/>
      <Typography 
      variant='h3' 
      sx={{
        marginBottom:'3rem',
        '@media (max-width: 390px)': {
          fontSize: '2rem',
          textAlign:'center'
        }
        }}>
        Add a new planet
      </Typography>
      <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          sx={{
            marginBottom:'1rem'
          }}
        />
        <TextField
          label="Climate"
          value={climate}
          onChange={(event) => setClimate(event.target.value)}
          required
          sx={{
            marginBottom:'1rem'
          }}
        />
        <TextField
          label="Population"
          type="number"
          value={population}
          onChange={(event) => setPopulation(Number(event.target.value))}
          required
          sx={{
            marginBottom:'1rem'
          }}
        />
        <Button 
        variant='contained' 
        type="submit" 
        sx={{
          backgroundColor:'black',
          '&:hover': {
            backgroundColor:'yellow',
            color:'black'
        }
          }}>Add</Button>
      </FormControl>
    </form>
      </Container>
    </Container>
  )
}

export default AddModal