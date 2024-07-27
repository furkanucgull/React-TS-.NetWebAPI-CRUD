using Mapster;
using MovieApp.Contracts.Responses;
using MovieApp.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Application.Mapping
{
    public static class MappingConfig
    {
        public static void Configure()
        {
            TypeAdapterConfig<List<Movie>, GetMoviesResponse>.NewConfig()
                .Map(dest => dest.MovieDtos, src => src);

            TypeAdapterConfig<Movie, GetMovieByIdResponse>.NewConfig().Map(dest => dest.MovieDto, src => src);
        }
    }
}
