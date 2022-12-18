import { Container } from '@mui/material';
import Home from './components/Home';


function App() {
  return (
      <Container sx={{
        padding: '0',
        '@media': {
          padding: '0'
        }
      }}>
        <Home />
      </Container>
  );
}

export default App;
