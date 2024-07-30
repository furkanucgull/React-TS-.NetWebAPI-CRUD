import { useEffect, useState } from "react";
import { MovieDto } from "~/../../../movieapp.client/src/models/movieDto";
import apiConnector from "../../api/apiConnector";

import { useNavigate } from 'react-router-dom';
import MUICard from "./MUICard";

export default function MovieList() {
    const [movies, setMovies] = useState<MovieDto[]>([]);
    const navigate = useNavigate();
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
            <h1 className="text-gray-600  text-3xl ml-11 p-3 font-[roboto]
            sm:text-5xl sm:ml-20 sm:p-5">List of Movies</h1>
            {/* <button onClick={() => navigate('create-movie')} className="bg-black text-white "> add movie</button> */}
            <div className="film-section flex flex-row gap-3 flex-wrap">
                {
                    movies.map((movie, index) => {
                        return <MUICard key={index} movie={movie} />;
                    })
                }

            </div>

        </div>
    );
}
