import { useEffect } from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { addBackToTop } from 'vanilla-back-to-top';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const SharedLayout = lazy(() => import('./SharedLayout/Sharedlayout'))

export const App = () => {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#FA7800',
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
        textColor: '#fff',
    })
  },[])
  return (
    <>    <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews/>} />    
          </Route>
          <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </>
  
 

  );
};
