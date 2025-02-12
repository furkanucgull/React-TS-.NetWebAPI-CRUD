import { TextField } from "@mui/material";
import { useState } from "react";
import apiConnector from "../../api/apiConnector";
import { useNavigate } from "react-router-dom";


export default function MovieForm() {
    const navigate = useNavigate();
    const [post, SetPost] = useState({
        title: "",
        category: " ",
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
            await apiConnector.createMovie(post);
            alert("Movie created successfully");
            navigate("/");
        } catch (error) {
            console.log("Error creating movie:", error);
        }
    };
    return (

        <div>
            <div className="mt-52">

                <form onSubmit={handleSubmit}>
                    <div className="form area flex flex-col items-center justify-center h-52 gap-3 sm:">

                        <TextField className="w-3/6" onChange={handleInput} id="outlined-basic" label="Title of Movie" name="title" variant="outlined" />
                        <TextField className="w-3/6" onChange={handleInput} id="outlined-basic" label="category" name="category" variant="outlined" />
                        {/* <MUISelect /> */}
                        <TextField className="w-3/6" onChange={handleInput} id="outlined-basic" multiline rows={4} label="Movie Description" name="description" variant="outlined" />

                        <div className="date-input flex flex-col justify-center items-center gap-2 border border-gray-200 p-3 rounded-lg">
                            <label className="font-mono" > Movie Create Date</label>
                            <input onChange={handleInput} className="border border-neutral-300 p-4 rounded-lg w-56 " type="date" name="createDate" id="" />
                        </div>
                        <button className="bg-blue-400 p-4 rounded-lg text-black font-semibold font-sans w-3/5" type="submit">Create Movie</button>


                    </div>
                </form>
            </div>

        </div>
    );
}
