import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { NavBar, SiderBar } from './';

import BackgroundHeader from '../../assets/img/header.png';

export const Header = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box>
        {/* NavBar */}
        <NavBar openDrawer={ openDrawer } setOpenDrawer={ setOpenDrawer } />

        {/* Sidebar */}
        <SiderBar openDrawer={ openDrawer } setOpenDrawer={ setOpenDrawer } />

        {/* Slider */}
        <Grid 
            container
            direction="row"
            alignContent="end"
            height={ { xs:150, sm:208} }
            marginTop={7}
            color="white"
            sx={{ 
                backgroundImage: `url( ${ BackgroundHeader} )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
             }}
        >
            <Grid item sx={{ pl: 4, pb: 2 }}>
                <Typography variant='h2' sx={{ fontSize:{ xs:35 } }}>Gallery</Typography>
            </Grid>
        </Grid>

    </Box>
  )
}
