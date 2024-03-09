import { useState } from 'react'
import { Box, Container, Typography } from '@mui/material';
import Characters from './Components/Characters';
import CharactersSkeleton from './Components/CharactersSkeleton';

function App() {


  return (
    <Container>
      <Typography variant='h4' textAlign='center' mb={3}>Rick and Morty App</Typography>

      <Box sx={{display: 'grid', gap: 2, maxWidth: 250, mx: 'auto'}}>
        <Characters/>
        <CharactersSkeleton/>
      </Box>

    </Container>
  )
}

export default App
