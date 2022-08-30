import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

import { GalleryLayout } from '../layout/GalleryLayout';
import { CardGrid, InputSearch } from '../components';


export const GalleryPage = () => {

  return (
    <GalleryLayout>
      
      {/* Input - search */}
      <InputSearch />
    
      {/* Component CardGrid */}
      <CardGrid />

      {/* Link - Load More */}
      <Link component={RouterLink} to="/" sx={{ p: 3, textAlign: 'center', textDecoration:'none'}} >
        <Typography variant='h5'>Load More</Typography>
      </Link>

    </GalleryLayout>
  )
}
