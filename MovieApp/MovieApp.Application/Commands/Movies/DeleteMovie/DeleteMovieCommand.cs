using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Application.Commands.Movies.DeleteMovie
{
    public record DeleteMovieCommand(int id) :IRequest<Unit>;
    
    
}
