import { useEffect, useState } from "react";
import { MovieDto } from "~/../../../movieapp.client/src/models/movieDto";
import apiConnector from "../../api/apiConnector";

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
                setMovies(fetchedMovies);

            } catch (err) {
                console.error('Error while fetching movies:', err);
            }
        };
        fetchData();
    }, []);
    const handleSearch = (term: string) => {
        SetSearchTerm(term);
    };

    return (
        <div>
            <div className=" flex justify-between">

                <h1 className="text-gray-600  text-xl ml-4 p-2 font-[roboto]
            sm:text-4xl sm:ml-14 sm:p-4 sm:mb-6 sm:mt-6">List of Movies</h1>

                {/* <input placeholder="Search for Movie" onChange={(e) => SetSearchTerm(e.target.value)} className="outline-none border border-gray-400 rounded-lg w-32 placeholder:pl-2 placeholder:font-mono  placeholder:text-[12px] h-6 mt-3 mr-12" type="text" /> */}
                <SearchComponent onSearch={handleSearch} />
            </div>

            {/* <button onClick={() => navigate('create-movie')} className="bg-black text-white "> add movie</button> */}
            <div className="film-section flex flex-row gap-3 flex-wrap">
                {

                    movies.filter((item) => {
                        return searchTerm.toLowerCase() === "" ? item : item.title.toLowerCase().includes(searchTerm);
                    }).map((movie, index) => {
                        return <MUICard key={index} movie={movie} />;
                    })
                }

            </div>

        </div>
    );
}
