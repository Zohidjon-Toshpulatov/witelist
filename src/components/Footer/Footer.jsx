import './Footer.css';
import { Box, Typography } from "@mui/material";
import Logo from '../../assets/logoBig.png';

export const Footer = () => {
    return (
        <Box
            sx={{
                background: '#ececec',
                px: { xs: '30px', lg: '110px' },
                py: { xs: '25px', lg: '65px' },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box sx={{
                width: { xs: '72px', lg: '195px' }
            }}>
                <img src={Logo} alt="Footer-Logo" className="footer-logo" />
            </Box>
            <Typography component='h5'
                sx={{
                    fontSize: { xs: '24px', lg: '36px' },
                    fontWeight: '700',
                    color: 'white'
                }}
            >WITELIST</Typography>
        </Box>
    )
}
