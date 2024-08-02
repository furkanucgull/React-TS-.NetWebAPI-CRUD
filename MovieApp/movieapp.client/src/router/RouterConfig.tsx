import { Route, Routes } from 'react-router-dom';
import MovieList from '../components/movies/MovieList';
import MovieForm from '../components/movies/MovieForm';
import MovieDetails from '../components/movies/MovieDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MovieEdit from '../components/movies/MovieEdit';

function RouterConfig() {
  return (
    <Routes>
      <Route path='/' element={<MovieList />} />
      <Route path='/create-movie' element={<MovieForm />} />
      <Route path='/edit-movie/:id' element={<MovieEdit />} />
      <Route path='/movie-details/:id' element={<MovieDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>


  );
}

export default RouterConfig;