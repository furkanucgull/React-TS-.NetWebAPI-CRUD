import * as React from 'react';
import { MovieDto } from '../../models/movieDto';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { MdFavoriteBorder } from "react-icons/md";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import apiConnector from '../../api/apiConnector';

interface Props {
    movie: MovieDto;
}

function MUICard({ movie }: Props) {
    const navigate = useNavigate();
    const { id, title, category, createDate } = movie;
    const handleDelete = async () => {
        const isConfirmed: boolean = window.confirm(`Are you sure want to Delete ${title} movie ?`);
        if (isConfirmed) {
            await apiConnector.deleteMovie(id);
            window.location.reload();
        }
    };
    return (
        <div className='!object-contain object-top flex text-center mt-4  flex-nowrap '>

            <Card
                className='ml-2'
                sx={{ width: { xs: 120, sm: 180, md: 240, lg: 300 }, maxWidth: { xs: 120, sm: 180, md: 240, lg: 300 } }}>
                <CardMedia
                    sx={{ height: { xs: 120, sm: 180, md: 240, lg: 300 }, maxHeight: { xs: 120, sm: 180, md: 240, lg: 300 } }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvtARVQAFZvjgby4i1ev7I2h0OgHcG8YoQ&s"
                />
                <CardContent className='p-2 sm:p-3'>
                    <Typography component="div">
                        <p onClick={() => navigate(`/movie-details/${id}`)} className='text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold text-blue-600 h-14 cursor-pointer'>{title}</p>
                    </Typography>
                    <p className='text-[11px] mt-2 sm:text-[12px] md:text-[14px] lg:text-[16px] font-serif text-gray-400 text-nowrap'>{createDate?.substring(0, 4)}, {category}</p>
                </CardContent>
                <CardActions className='flex justify-end'>
                    <MdFavoriteBorder className='text-sm sm:text-base md:text-lg cursor-pointer ' />
                    <MdDeleteOutline onClick={handleDelete} className='cursor-pointer' size={20} color='red' />
                </CardActions>
            </Card>
        </div >
    );
}

export default MUICard;