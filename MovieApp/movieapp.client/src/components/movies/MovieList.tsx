import { useEffect, useState } from "react";
import { MovieDto } from "~/../../../movieapp.client/src/models/movieDto";
import apiConnector from "../../api/apiConnector";
import MUICard from "./MUICard";

export default function MovieList() {
    const [movies, setMovies] = useState<MovieDto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedMovies = await apiConnector.getMovies();
                setMovies(fetchedMovies);
                console.log(fetchedMovies); // Debugging purposes
            } catch (err) {
                console.error('Error while fetching movies:', err);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            {
                movies.map((movie, index) => {
                    return <MUICard key={index} movie={movie} />;
                })
            }

        </div>
    );
}
