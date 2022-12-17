import { Button, FormControl, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, {useState} from 'react'
import '../styles/AddModal.css'
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
    <div className='add-modal'>
      <div className='modal-box'>
      <CloseIcon sx={{
        position:'absolute',
        left:'1rem',
        top:'1rem',
        cursor:'pointer',
        color:'white'
      }}
      onClick={() => props.setShowModal(false)}/>
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
        <Button variant='contained' type="submit" sx={{backgroundColor:'black'}}>Add</Button>
      </FormControl>
    </form>
      </div>
    </div>
  )
}

export default AddModal