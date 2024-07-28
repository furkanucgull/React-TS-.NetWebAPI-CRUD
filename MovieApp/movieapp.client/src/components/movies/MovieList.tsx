import { useEffect, useState } from "react";
import { MovieDto } from "~/../../../movieapp.client/src/models/movieDto";
import apiConnector from "../../api/apiConnector";

export default function MovieList() {
    const [movies, setMovies] = useState<MovieDto[]>([]);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const fetchedMovies = await apiConnector.getMovies();
    //             setMovies(fetchedMovies);
    //             console.log(fetchedMovies); // Debugging purposes
    //         } catch (err) {
    //             console.error('Error while fetching movies:', err);
    //             setError('An error occurred while fetching movies.');
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <div>
            <h1>Movie List</h1>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <div>{movie.title}</div>
                            <div>{movie.description}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
