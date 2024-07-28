import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../components/movies/MovieList';
import MovieForm from '../components/movies/MovieForm';
import MovieDetails from '../components/movies/MovieDetails';

function RouterConfig() {
  return (
    <Routes>
      <Route path='/' element={<MovieList />} />
      <Route path='/create-movie' element={<MovieForm />} />
      <Route path='/movie-details/:id' element={<MovieDetails />} />
    </Routes>


  );
}

export default RouterConfig;