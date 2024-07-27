using MediatR;
using MovieApp.Domain;
using MovieApp.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Application.Commands.Movies.CreateMovie
{
    public class CreateMovieCommandHandler : IRequestHandler<CreateMovieCommand, int>
    {
        private readonly MoviesDbContext _context;

        public CreateMovieCommandHandler(MoviesDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateMovieCommand request, CancellationToken cancellationToken)
        {
            var movie = new Movie
            {
                Title = request.title,
                Category = request.category,
                Description = request.description,
                CreateDate = DateTime.Now.ToUniversalTime(),
            };
            await _context.Movies.AddAsync(movie, cancellationToken);
            var id = await _context.SaveChangesAsync(cancellationToken);
            return id;
        }
    }
}
