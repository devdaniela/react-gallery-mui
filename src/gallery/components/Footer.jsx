import { CopyrightOutlined } from '@mui/icons-material';
import { Grid, Box, Typography } from '@mui/material';

import logo from '../../assets/img/logo-footer.svg';

export const Footer = () => {
  return (
    <Grid container 
        direction="column"
        alignItems="center"
        height={ 55 }
        borderTop={4}
        sx={{ 
          pt:2, 
          bottom: 0, 
          backgroundColor: 'secondary.darker', 
          color: 'secondary.contrastText', 
          borderColor:'primary.main',
        }}
    >
        <Grid item >
            <Box
                component="img"
                sx={{ height: 27, mr: 2, display: {xs:'none', sm:'inline-block'}}}
                alt="ACMEgallery"
                src={ logo }
            />
            <CopyrightOutlined /> 
            <Typography variant='copyright' sx={{ float: 'right', pl: 1, mt: .5 }}>All right reserved 2022</Typography>
        </Grid>
    </Grid>
  )
}
