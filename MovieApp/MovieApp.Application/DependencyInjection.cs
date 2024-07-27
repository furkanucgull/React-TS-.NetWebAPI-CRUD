using Mapster;
using Microsoft.Extensions.DependencyInjection;
using MovieApp.Contracts.Responses;
using MovieApp.Domain;
using System.Reflection;

namespace MovieApp.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddMediatR(cfg =>
            {
                cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly());
            });

             ConfigureMappings();

             services.AddSingleton(TypeAdapterConfig.GlobalSettings);

            return services;
        }

        private static void ConfigureMappings()
        {
      
            TypeAdapterConfig<List<Movie>, GetMoviesResponse>
                .NewConfig()
                .Map(dest => dest.MovieDtos, src => src);
        }
    }
}
