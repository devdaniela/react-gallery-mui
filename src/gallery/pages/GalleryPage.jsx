import { Grid, Box, Avatar, Typography } from '@mui/material';

import { GalleryLayout } from '../layout/GalleryLayout';

import imgCard from '../../assets/img/card.png';
import imgAvatar from '../../assets/img/avatar.png';

export const GalleryPage = () => {

  const cards = [1,2,3,4,5,6,7,8];

  return (
    <GalleryLayout>
      
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci quisquam aperiam sit repellat fugit! Nesciunt totam quam magni quod neque tenetur eaque quae dicta rerum eum officia, obcaecati facilis.</Typography> */}

      {/*  NothinSelected */}

      {/* GalleryView */}

      <Grid 
        container
        direction="row"
        alignItems="center"
      >
        { 
          cards.map( card => (
            <Grid item 
                key={ card } 
                xs={ 12 } 
                md={ 6 } 
                lg={ 4 } 
                xl={ 3 }
                sx={{ backgroundColor:'secondary.light' }}
            >
              <Box
                  component="img"
                  sx={{ width: { xs: 335, sm: 350 } }}
                  alt="ACMEgallery"
                  src={ imgCard }
              />
              <Box>
                <Avatar alt="avatar" src={ imgAvatar } />
                <Typography>Sam Jerremy</Typography>
                <Typography color="inherit">#dayAtTheBeach</Typography>
              </Box>
            </Grid>
          ))
        
        }
      </Grid>
      

    </GalleryLayout>
  )
}
