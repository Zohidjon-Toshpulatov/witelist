import { Box, Typography } from "@mui/material";
import RSmall from '../../assets/r-small.png';

export const TableRow = () => {
    return (
        <div>
            <Box
                sx={{
                    background: '#f1f1f1',
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    flexDirection: { xs: 'column', lg: 'row' },
                    py: '10px',
                    px: '25px',
                    mt: '20px'
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={RSmall} alt="placeholder" />
                    <Typography sx={{ ml: '30px' }}>Project 1</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{
                        fontSize: '20px',
                        '&>span': {
                            color: 'red',
                        },
                        mr: '20px'
                    }}><span>1232</span> UPVOTES</Typography>
                    <Typography sx={{
                        fontSize: '20px',
                        '&>span': {
                            color: 'green',
                        },
                    }}> <span>232</span> DOWNVOTES</Typography>
                </Box>
            </Box>
        </div>
    )
}


