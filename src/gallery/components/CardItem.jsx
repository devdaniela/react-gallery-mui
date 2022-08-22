
import { Grid, Box, Avatar, Typography } from '@mui/material';

import imgCard from '../../assets/img/card.png';
import imgAvatar from '../../assets/img/avatar.png';

export const CardItem = () => {
  return (
    <Grid item sx={{ m: 2, backgroundColor:'secondary.light', borderRadius: '10px' }} >
        <Box
            component="img"
            sx={{ width: { xs: 335, md: 350 }, borderRadius: '10px 10px 0px 0px' }}
            alt="ACMEgallery"
            src={ imgCard }
        />
        <Grid 
            container
            alignItems="center"
            spacing={2}
            padding={1}
        >
            <Grid item>
                <Avatar alt="avatar" src={ imgAvatar } />
            </Grid>
            <Grid item>
                <Typography>Sam Jerremy</Typography>
                <Typography color="inherit">#dayAtTheBeach</Typography>
            </Grid>
        </Grid>
        
    </Grid>
  )
}
