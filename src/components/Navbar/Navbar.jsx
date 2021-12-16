import './Navbar.css';
import { AppBar, Button, IconButton, Input, InputAdornment, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Menu as MenuIcon } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Logo from '../../assets/logo.png';


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
            <AppBar position='static'>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
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
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ mx: '14px', color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box>
                        <Button
                            variant="outlined"
                            sx={{
                                color: 'white',
                                border: '1px solid white',
                                borderRadius: '15px',
                                px: '15px',
                                py: '5px',
                                '&:hover': { border: '1px solid white' }
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
