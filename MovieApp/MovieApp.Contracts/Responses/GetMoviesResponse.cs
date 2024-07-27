using MovieApp.Contracts.Dtos;


namespace MovieApp.Contracts.Responses
{
    public record GetMoviesResponse(List<MovieDto> MovieDtos)
    {
    }
}
