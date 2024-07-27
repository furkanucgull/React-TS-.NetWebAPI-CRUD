using Microsoft.EntityFrameworkCore;
using MovieApp.Infrastructure;
using MovieApp.Application;
using MovieApp.Server.Modules;
using System.Reflection;
using MovieApp.Application.Mapping;

namespace MovieApp.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Register DbContext
            builder.Services.AddDbContext<MoviesDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DbConnectionString")));

            // Add Application services and MediatR
            builder.Services.AddApplication();
            //MappingConfig.Configure();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();

            // Custom endpoints configuration
            app.AddMoviesEndpoints();

            app.MapControllers();
            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
