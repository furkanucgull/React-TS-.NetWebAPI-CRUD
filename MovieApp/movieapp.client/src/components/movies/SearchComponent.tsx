import React, { useState } from 'react';

interface Props {
    onSearch: (term: string) => void;
}

const SearchComponent: React.FC<Props> = ({ onSearch }) => {
    const [clicked, SetClicked] = useState<boolean>(false);
    const handleClick = () => {
        SetClicked(!clicked);

    };
    const [searchTerm, SetSearchTerm] = useState<string>("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        SetSearchTerm(term);
        onSearch(term);
    };
    return (
        <div className='flex justify-center items-center gap-3'>
            {

                clicked == false ?
                    <p onClick={handleClick} className='font-light text-[14px] italic border-b-2 mr-12 sm:mr-20 ' >Click for Search</p>
                    : <div className=' mt-2 flex items-center justify-center border-none h-12 from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br rounded-xl mr-4'>

                        <form action="" className="relative mx-auto flex border-none">
                            <input onChange={handleSearchChange} type="search" className="placeholder:text-left border-none text-xs peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent  pr-10 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-taupeGray focus:px-3" placeholder="Typing..." />
                            <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-22 px-3  rounded-lg peer-focus:relative peer-focus:rounded-l-none">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                                </svg>
                            </button>
                        </form>
                    </div>

            }


        </div>
    );
};

export default SearchComponent;