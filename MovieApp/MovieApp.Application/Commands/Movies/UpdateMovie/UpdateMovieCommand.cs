using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Application.Commands.Movies.UpdateMovie
{
    public record UpdateMovieCommand(int id, string title, string description,string category):IRequest<Unit>;
  
}
