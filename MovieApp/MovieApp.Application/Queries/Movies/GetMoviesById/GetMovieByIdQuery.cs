using MediatR;
using MovieApp.Contracts.Responses;


namespace MovieApp.Application.Queries.Movies.GetMoviesById
{
    public record GetMovieByIdQuery(int Id) : IRequest<GetMovieByIdResponse>;
}
