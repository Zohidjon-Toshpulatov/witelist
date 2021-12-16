import './Navbar.css';
import { AppBar, Button, IconButton, Input, InputAdornment, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Menu as MenuIcon } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const pages = ['Home', 'Browse', 'Sell', 'Discord'];

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div>
            <AppBar position='static' sx={{ background: '#f1f1f1' }}>
                <Toolbar disableGutters sx={{ p: '25px', }}>
                    <Box
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img className='logo' src={Logo} alt="Logo" />
                    </Box>
                    <Box
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img className='logo' src={Logo} alt="Logo" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'right' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link className='link' to='/'>Home</Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link className='link' to='/project'>Browse</Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link className='link' to='/leaderboard'>Sell</Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link className='link' to='/'>Discord</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Input
                            className='search-input'
                            endAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            sx={{
                                width: { xs: '100px', lg: '400px' },
                                background: '#ECECEC',
                                borderRadius: '19px',
                                border: '1px solid white',
                                px: '10px',
                                mx: '50px',
                                '&::before, &::after, &:focus': {
                                    border: 0,
                                },
                                '&:hover:not': {
                                    '&::before': {
                                        border: 0
                                    }
                                }
                            }}
                        />
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ mx: '14px', color: 'white', display: 'block' }}
                        >
                            <Link className='link' to='/'>Home</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ mx: '14px', color: 'white', display: 'block' }}
                        >
                            <Link className='link' to='/project'>Browse</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ mx: '14px', color: 'white', display: 'block' }}
                        >
                            <Link className='link' to='/leaderboard'>Sell</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ mx: '14px', color: 'white', display: 'block' }}
                        >
                            <Link className='link' to='/'>Discord</Link>
                        </Button>

                    </Box>

                    <Box>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '15px',
                                color: '#737373',
                                border: '1px solid #737373',
                                px: '15px',
                                py: '5px',
                                '&:hover': { border: '1px solid #737373' },
                                mb: { xs: '50px', lg: '0' }
                            }}
                        >
                            Select Wallet
                        </Button>

                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
