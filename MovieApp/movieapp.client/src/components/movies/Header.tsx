
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { RiMovieFill } from "react-icons/ri";
function Header() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        className='flex  gap-2 items-center  sm:gap-6'
                        variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <p className='text-2xl text-neutral-200 rounded-3xl sm:text-3xl'> FilMovies</p>
                        <RiMovieFill className='text-3xl text-red-400 outline-dashed outline-cyan-50 rounded-3xl sm:text-5xl' />
                    </Typography>
                    <Button onClick={() => navigate('/')} color="inherit">Home</Button>
                    <Button onClick={() => navigate('/login')} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;