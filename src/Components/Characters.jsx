import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Characters = () => {
  return (
    <Card>
      <CardMedia
        image='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        title = "Rick Sanchez"
        sx={{height: 250, width: 250}}
      />
      <CardContent>
        <Typography variant='h5'>Rick Sanchez</Typography>
      </CardContent>
    </Card>
  )
}

export default Characters
