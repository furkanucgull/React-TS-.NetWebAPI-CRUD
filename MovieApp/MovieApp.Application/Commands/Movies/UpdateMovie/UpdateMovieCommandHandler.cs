using MediatR;
using Microsoft.EntityFrameworkCore;
using MovieApp.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Application.Commands.Movies.UpdateMovie
{
    public class UpdateMovieCommandHandler : IRequestHandler<UpdateMovieCommand, Unit>
    {
        private readonly MoviesDbContext _context;

        public UpdateMovieCommandHandler(MoviesDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateMovieCommand request, CancellationToken cancellationToken)
        {
            var movieToUpdate = await _context.Movies.FirstOrDefaultAsync(x => x.Id == request.id, cancellationToken);
            if (movieToUpdate == null)
            {
                throw new Exception();

            }
            movieToUpdate.Description = request.description;
            movieToUpdate.Title = request.title;
            movieToUpdate.Category = request.category;
            _context.Movies.Update(movieToUpdate);
            await _context.SaveChangesAsync();
            return Unit.Value;
        }
    }
}
