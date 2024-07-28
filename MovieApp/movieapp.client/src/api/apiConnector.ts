import axios, { AxiosResponse } from 'axios';
import { MovieDto } from '../models/movieDto';
import { GetMoviesResponse } from '../models/getMoviesResponse ';
import { API_BASE_URL } from '../../config';

const apiConnector = {
  getMovies: async (): Promise<MovieDto[]> => {
    try {
      const response: AxiosResponse<GetMoviesResponse> = await axios.get(`${API_BASE_URL}/movies`);
      const movies = response.data.movieDtos.map((movie: MovieDto) => ({
        ...movie,

        createDate: movie.createDate?.slice(0, 10) ?? '',
      }));

      return movies;
    } catch (error) {
      console.log('error while fetching', error);
      throw error;
    }
  },
  createMovie: async (movie: MovieDto): Promise<void> => {
    try {
      await axios.post<number>(`${API_BASE_URL}/movies`, movie);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  },
  editMovie: async (movie: MovieDto): Promise<void> => {
    try {
      await axios.put<number>(`${API_BASE_URL}/movies`, movie);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  },
  deleteMovie: async (movieId: number): Promise<void> => {
    try {
      await axios.delete<number>(`${API_BASE_URL}/movies/${movieId}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getMovieById: async (movieId: number): Promise<MovieDto | undefined> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movies/${movieId}`);
      return response.data.MovieDto;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
export default apiConnector;
