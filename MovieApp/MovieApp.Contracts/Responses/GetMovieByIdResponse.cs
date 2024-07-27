using MovieApp.Contracts.Dtos;


namespace MovieApp.Contracts.Responses
{
    public class GetMovieByIdResponse
    {
        public MovieDto MovieDto { get; set; }
    }

    public class MovieDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
    }

}
