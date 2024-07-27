using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Contracts.Requests.Movies
{
    public record UpdateMovieRequest(string title, string description, string category);

}
