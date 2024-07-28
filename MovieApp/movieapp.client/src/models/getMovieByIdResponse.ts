import { MovieDto } from '../models/movieDto.ts';

export interface GetMovieByIdResponse {
  movieDtos: MovieDto;
}
