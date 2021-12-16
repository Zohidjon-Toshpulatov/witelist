import './TopHeader.css';
import { Box, Typography } from "@mui/material";
import Logo from './../../assets/logo.png';

export const TopHeader = () => {
    return (
        <div className="top-section">
            <Box
                component="div"
                sx={{
                    backgoundColor: '#F2ECCB',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: '12px 24px'
                    }}
                >
                    <Typography
                        sx={{
                            textTransform: 'uppercase',
                            fontSize: { xs: 24, md: 36 },
                            lineHeight: { xs: '26px', md: '40px' },
                            fontWeight: 600
                        }}
                    >new drop on 10/3</Typography>
                </Box>
                <img src={Logo} alt="Logo" />
            </Box>
        </div>
    )
}
