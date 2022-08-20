
import { Navigate, Route, Routes } from 'react-router-dom';
import { GalleryPage } from '../pages';

export const GalleryRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={ <GalleryPage /> } />

            <Route path="/*" element={ <Navigate to="/" /> }  />
        </Routes>
  )
}
