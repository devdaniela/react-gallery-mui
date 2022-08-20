
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Grid, IconButton, Button, Toolbar, Link, Box } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import LogoNavBar from '../../assets/img/logo-nav.svg';


export const NavBar = ({ openDrawer, setOpenDrawer }) => {


  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'inherit', color: 'inherit' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 1, sm: 4 } }}
      >
        <Box
            component="img"
            sx={{ height: 37 }}
            alt="ACMEgallery"
            src={ LogoNavBar }
        />

        <Toolbar>
          <IconButton
            onClick={() => setOpenDrawer(!openDrawer)}
            sx={{ 
              display: { sm: "none" }, 
              backgroundColor: 'primary.main', 
              color: 'primary.contrastText',
            }}
          >
            <MenuOutlined />
          </IconButton>

          <Link component={RouterLink} to="/auth/login" sx={{ display: { xs: "none", sm: "block" } }}>
            <Button variant="contained">Login</Button>
          </Link>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};
