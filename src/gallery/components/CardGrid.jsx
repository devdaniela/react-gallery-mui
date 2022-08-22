import { Grid } from '@mui/material';

import { CardItem } from './';
import { getCards } from '../../helpers/getCards';


export const CardGrid = () => {

  const cards = getCards();

  return (
    <Grid container justifyContent="center" >
        { 
          cards.map( card => (
            <CardItem 
              key={card.id} 
              {...card} 
            />
          ))
        }
    </Grid>
  )
}
