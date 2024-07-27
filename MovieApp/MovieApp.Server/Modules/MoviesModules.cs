using MediatR;
using MovieApp.Application.Commands.Movies.CreateMovie;
using MovieApp.Application.Commands.Movies.DeleteMovie;
using MovieApp.Application.Commands.Movies.UpdateMovie;
using MovieApp.Application.Queries.Movies.GetMovies;
using MovieApp.Application.Queries.Movies.GetMoviesById;
using MovieApp.Contracts.Requests.Movies;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;


namespace MovieApp.Server.Modules
{
    public static class MoviesModules
    {
        public static void AddMoviesEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/api/movies", async (IMediator mediator, CancellationToken ct) =>
            {
                var movies = await mediator.Send(new GetMoviesQuery(), ct);
                return Results.Ok(movies);
            }).WithTags("Movies");

            app.MapGet("/api/movies/{id}", async (IMediator mediator, int id, CancellationToken ct) =>
            {
                var movie = await mediator.Send(new GetMovieByIdQuery(id), ct);
                return Results.Ok(movie);
            }).WithTags("Movies");


            app.MapPost("/api/movies/", async (IMediator mediator, CreateMovieRequest createMovieRequest, CancellationToken ct) =>
            {
                var command = new CreateMovieCommand(createMovieRequest.title, createMovieRequest.description, createMovieRequest.category);
                var result = await mediator.Send(command, ct);
                return Results.Ok(result);
            }).WithTags("Movies");
            app.MapPut("/api/movies/{id}", async (IMediator mediator, int id, UpdateMovieRequest updateMovieRequest, CancellationToken ct) =>
            {
                var command = new UpdateMovieCommand(id, updateMovieRequest.title, updateMovieRequest.description, updateMovieRequest.category);
                var result = await mediator.Send(command, ct);
                return Results.Ok(result);
            }).WithTags("Movies");
            app.MapDelete("/api/movies/{id}", async (IMediator mediator, int id, CancellationToken ct) =>
            {
                var command = new DeleteMovieCommand(id);
                var result = await mediator.Send(command, ct);
                return Results.Ok(result);
            }).WithTags("Movies");
        }
    }
}
