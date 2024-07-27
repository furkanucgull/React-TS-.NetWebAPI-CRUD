using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MovieApp.Contracts.Responses;
using MovieApp.Domain;
using MovieApp.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Application.Queries.Movies.GetMovies
{
    public class GetMoviesQueryHandler : IRequestHandler<GetMoviesQuery, GetMoviesResponse>
    {
        private readonly MoviesDbContext _context;

        public GetMoviesQueryHandler(MoviesDbContext context)
        {
            _context = context;
        }

        public async Task<GetMoviesResponse> Handle(GetMoviesQuery request, CancellationToken cancellationToken)
        {
            var movies = await _context.Movies.ToListAsync(cancellationToken);

            return movies.Adapt<GetMoviesResponse>();
        }
    }
}
