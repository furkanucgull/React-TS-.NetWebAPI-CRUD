import React, { useEffect, useState } from 'react';
import { MovieDto } from '../../models/movieDto';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import apiConnector from '../../api/apiConnector';

interface Props {
    movie?: MovieDto;
}

const MovieEdit = ({ movie }: Props) => {
    const { id } = useParams();
    const [oldMovie, SetOldMovie] = useState<MovieDto>();
    useEffect(() => {
        if (id) {
            const getMovieById = async () => {
                const oldData = await apiConnector.getMovieById(id);
                SetOldMovie(oldData);
                console.log(oldData);
            };
            getMovieById();
        }
    }, [id]);

    return (
        <>

            <h1 className='text-center font-sans text-3xl mt-6 text-nowrap text-red-500'>Movie edit of "<p className='inline-block font-bold'>{oldMovie?.title}</p>"</h1>
            <div className="mt-52">
                <form >
                    <div className="form area flex flex-col items-center justify-center h-52 gap-3 sm:">

                        <TextField className="w-3/6 " id="outlined-basic" value={oldMovie?.title} label="Title of Movie" name="title" variant="outlined" />
                        <TextField className="w-3/6" id="outlined-basic" value={oldMovie?.category} label="category" name="category" variant="outlined" />
                        {/* <MUISelect /> */}
                        <TextField className="w-3/6" id="outlined-basic" value={oldMovie?.description} multiline rows={4} label="Movie Description" name="description" variant="outlined" />

                        <div className="date-input flex flex-col justify-center items-center gap-2 border border-gray-200 p-3 rounded-lg">
                            <label className="font-mono" > Movie Create Date</label>
                            <input className="border border-neutral-300 p-4 rounded-lg w-56 " type="date" name="createDate" id="" />
                        </div>
                        <button className="bg-blue-400 p-4 rounded-lg text-black font-semibold font-sans w-3/5" type="submit">Update Movie</button>


                    </div>
                </form>
            </div>

        </>

    );
};

export default MovieEdit;