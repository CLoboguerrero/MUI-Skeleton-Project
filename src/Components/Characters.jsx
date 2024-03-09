import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Characters = ({ name, image }) => {
  return (
    <Card>
      <CardMedia
        image={image}
        title = "Rick Sanchez"
        sx={{height: 250, width: 250}}
      />
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
      </CardContent>
    </Card>
  )
}

export default Characters
