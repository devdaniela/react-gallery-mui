
import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { GalleryRoutes } from '../gallery/routes/GalleryRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        
        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* GalleryApp */}
        <Route path="/*" element={ <GalleryRoutes /> } />

    </Routes>
  )
}
