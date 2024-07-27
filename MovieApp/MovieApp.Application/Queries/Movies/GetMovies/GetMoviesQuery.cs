using MediatR;
using MovieApp.Contracts.Responses;


namespace MovieApp.Application.Queries.Movies.GetMovies
{
    public record GetMoviesQuery():IRequest<GetMoviesResponse>;
   
}
