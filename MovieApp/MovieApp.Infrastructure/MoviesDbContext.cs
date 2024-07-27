

using Microsoft.EntityFrameworkCore;
using MovieApp.Domain;

namespace MovieApp.Infrastructure
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
