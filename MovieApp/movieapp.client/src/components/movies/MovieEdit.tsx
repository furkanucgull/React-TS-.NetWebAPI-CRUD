import React, { useEffect, useState } from 'react';
import { MovieDto } from '../../models/movieDto';
import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import apiConnector from '../../api/apiConnector';



const MovieEdit = () => {
    const { id } = useParams();
    const [oldMovie, SetOldMovie] = useState<MovieDto>();
    const navigate = useNavigate();
    const [post, SetPost] = useState({
        title: "",
        category: "",
        description: "",
        createDate: "",
        imageUrl: ""
    });

    const handleInput = (e: { target: { name: string; value: string; }; }) => {
        SetPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (id) {
                await apiConnector.editMovie(id, post);
                alert("Film başarıyla güncellendi");
            } else {
                await apiConnector.createMovie(post);
                alert("Film başarıyla oluşturuldu");
            }
            navigate("/");
        } catch (error) {
            console.log("Film güncellenirken hata oluştu:", error);
        }
    };

    useEffect(() => {
        if (id) {
            const getMovieById = async () => {
                const oldData = await apiConnector.getMovieById(id);
                SetOldMovie(oldData);
                SetPost({
                    title: oldData?.title || "",
                    category: oldData?.category || "",
                    description: oldData?.description || "",
                    createDate: oldData?.createDate || "",
                    imageUrl: oldData?.imageUrl || ""
                });
                console.log(oldData);
            };
            getMovieById();
        }
    }, [id]);

    return (
        <>
            <h1 className='text-center font-sans text-3xl mt-6 text-nowrap text-red-500'>
                "<p className='inline-block font-bold'> <p>Edit Movie</p>{oldMovie?.title}</p>"
            </h1>
            <div className="mt-52">
                <form onSubmit={handleSubmit}>
                    <div className="form area flex flex-col items-center justify-center h-52 gap-3 sm:">
                        <TextField className="w-3/6" value={post.title} onChange={handleInput} id="outlined-basic" label="Title of Movie" name="title" variant="outlined" />
                        <TextField className="w-3/6" value={post.category} onChange={handleInput} id="outlined-basic" label="Category" name="category" variant="outlined" />
                        <TextField className="w-3/6" value={post.description} onChange={handleInput} id="outlined-basic" multiline rows={4} label="Film Açıklaması" name="description" variant="outlined" />
                        <div className="date-input flex flex-col justify-center items-center gap-2 border border-gray-200 p-3 rounded-lg">
                            <label className="font-mono">Movie Create Date</label>
                            <input value={post.createDate} onChange={handleInput} className="border border-neutral-300 p-4 rounded-lg w-56" type="date" name="createDate" id="" />
                        </div>
                        <button className="bg-blue-400 p-4 rounded-lg text-black font-semibold font-sans w-3/5" type="submit">
                            Update Movie
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MovieEdit;
