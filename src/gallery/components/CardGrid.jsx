import { Grid } from '@mui/material';
import { CardItem } from './';


export const CardGrid = () => {

  const cards = [1,2,3,4,5,6,7,8];

  return (
    <Grid container justifyContent="center" >
        { 
          cards.map( card => (
            <CardItem key={card} />
          ))
        }
    </Grid>
  )
}
