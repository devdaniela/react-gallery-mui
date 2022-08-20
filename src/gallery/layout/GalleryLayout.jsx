
import { Box, Toolbar } from '@mui/material';
import { Header, Footer } from '../components';

export const GalleryLayout = ({ children }) => {
  return (
    <Box>
        <Header />

        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar>
            { children }
          </Toolbar>
        </Box>

        <Footer />
    </Box>
  )
}
