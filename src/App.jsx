import { useState, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material';
import Characters from './Components/Characters';
import CharactersSkeleton from './Components/CharactersSkeleton';

function App() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Typography variant='h4' textAlign='center' mb={3}>Rick and Morty App</Typography>

      <Box sx={{display: 'grid', gap: 2, maxWidth: 250, mx: 'auto'}}>

        {
          loading
          ? (
              [1,2,3].map((item) =>(
                <CharactersSkeleton key={item}/>
              ))
            )
          : characters.map((character) => (
            <Characters
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))
        }

      </Box>

    </Container>
  )
}

export default App
