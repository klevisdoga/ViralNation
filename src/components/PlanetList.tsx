import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const GET_PLANETS = gql`
  query GetPlanets {
    allPlanets {
      planets {
        name
        climates
        population
      }
    }
  }
`;

export default function PlanetList() {
  const { loading, error, data } = useQuery(GET_PLANETS);

  const [planets, setPlanets] = useState([data.allPlanets.planets])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <List sx={{
        display:'flex',
        justifyContent:'space-evenly',
        flexWrap:'wrap'
    }}>
      {data.allPlanets.planets.map((planet: any) => (
        <ListItem key={planet.name} sx={{
            width:200
        }}>
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
    </List>
  );
}