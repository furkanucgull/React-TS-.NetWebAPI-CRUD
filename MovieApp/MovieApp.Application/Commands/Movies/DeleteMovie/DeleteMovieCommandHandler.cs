using MediatR;
using Microsoft.EntityFrameworkCore;
using MovieApp.Infrastructure;


namespace MovieApp.Application.Commands.Movies.DeleteMovie
{
    public class DeleteMovieCommandHandler : IRequestHandler<DeleteMovieCommand, Unit>
    {
        private readonly MoviesDbContext _context;

        public DeleteMovieCommandHandler(MoviesDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteMovieCommand request, CancellationToken cancellationToken)
        {
            var movieToDelete = await _context.Movies.FirstOrDefaultAsync(x => x.Id == request.id, cancellationToken);
            if (movieToDelete == null)
            {
                throw new Exception();
            }
            _context.Movies.Remove(movieToDelete);
            await _context.SaveChangesAsync();
            return Unit.Value;
        }
    }
}
