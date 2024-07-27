using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MovieApp.Contracts.Responses;
using MovieApp.Infrastructure;

namespace MovieApp.Application.Queries.Movies.GetMoviesById
{
    public class GetMovieByIdQueryHandler : IRequestHandler<GetMovieByIdQuery, GetMovieByIdResponse>
    {
        private readonly MoviesDbContext _context;

        public GetMovieByIdQueryHandler(MoviesDbContext context)
        {
            _context = context;
        }

        public async Task<GetMovieByIdResponse> Handle(GetMovieByIdQuery request, CancellationToken cancellationToken)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
            if (movie == null)
            {
                return null;
            }

            var movieDto = movie.Adapt<MovieDto>();
            return new GetMovieByIdResponse { MovieDto = movieDto };
        }
    }
}
