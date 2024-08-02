import { useEffect, useState } from "react";
import { MovieDto } from "~/../../../movieapp.client/src/models/movieDto";
import apiConnector from "../../api/apiConnector";
import { movieData } from "../../data/movieData";
import { useNavigate } from 'react-router-dom';
import MUICard from "./MUICard";
import SearchComponent from "./SearchComponent";

export default function MovieList({ onSearch }) {
    const [movies, setMovies] = useState<MovieDto[]>([]);
    const navigate = useNavigate();
    const [searchTerm, SetSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedMovies = await apiConnector.getMovies();
                if (fetchedMovies.length === 0) {
                    setMovies(movieData); // if database doesnt exis
                } else {
                    setMovies(fetchedMovies); // if its exist
                }
            } catch (err) {
                console.error('Error while fetching movies:', err);
                setMovies(movieData);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (term: string) => {
        SetSearchTerm(term);
    };

    const filteredMovies = movies.filter((item) => {
        return searchTerm.toLowerCase() === "" ? true : item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-gray-600 text-xl ml-4 p-2 font-[roboto] sm:text-4xl sm:ml-14 sm:p-4 sm:mb-6 sm:mt-6">
                    List of Movies
                </h1>
                <div className="flex justify-center items-center mr-7">
                    <button
                        onClick={() => navigate('create-movie')}
                        className="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Add Movie
                    </button>
                </div>
                <SearchComponent onSearch={handleSearch} />
            </div>

            <div className="film-section flex flex-row gap-3 flex-wrap justify-center">
                {filteredMovies.map((movie, index) => (
                    <MUICard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}
