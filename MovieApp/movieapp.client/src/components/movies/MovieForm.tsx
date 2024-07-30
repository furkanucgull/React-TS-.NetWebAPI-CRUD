import { TextField } from "@mui/material";
import MUISelect from "./MUISelect";


export default function MovieForm() {
    return (

        <div>
            <div className="mt-52">

                <div className="form area flex flex-col items-center justify-center h-52 gap-3 sm:">
                    <TextField className="w-3/6" id="outlined-basic" label="Title of Movie" variant="outlined" />
                    <MUISelect />
                    <TextField className="w-3/6" id="outlined-basic" multiline rows={4} label="Movie Description" variant="outlined" />

                    <div className="date-input flex flex-col justify-center items-center gap-2 border border-gray-200 p-3 rounded-lg">
                        <label className="font-mono" htmlFor=""> Movie Create Date</label>
                        <input className="border border-neutral-300 p-4 rounded-lg w-56 " type="date" name="" id="" />
                    </div>
                    <button className="bg-blue-400 p-4 rounded-lg text-black font-semibold font-sans w-3/5" type="submit">Create Movie</button>
                </div>
            </div>

        </div>
    );
}
