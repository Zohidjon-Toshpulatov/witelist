import { Box, Typography } from "@mui/material"
import DetailedSlider from "../../components/DetailedSlider/DetailedSlider"
import { TableRow } from "../../components/TRow/TRow"

export const Leader = () => {
    return (
        <div>
            <Box sx={{ background: '#ececec' }}>
                <Typography
                    sx={{
                        fontSize: { xs: '36px', lg: '48px' },
                        fontWeight: '900',
                        py: { xs: '20px', lg: '58px' },
                        textTransform: 'uppercase'
                    }}>
                    Leaderboard
                </Typography>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <Typography
                    sx={{
                        fontSize: '48px',
                        fontWeight: '900',
                        my: { xs: '20px 8px', lg: '40px 8px' },
                        mr: '20px',
                        textTransform: 'capitalize',
                        textAlign: 'right'
                    }}>
                    Trending
                </Typography>
                <DetailedSlider />
                <Box sx={{ display: 'block', w: { lg: '40%' }, py: { xs: '40px', lg: '105px' } }}>
                    <Typography sx={{ textTransform: 'capitalize', fontSiz: '22px', fontWeight: '900' }}>
                        LIMITED EDITION DROPS
                        <br />
                        VERIFIED BY WL
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}
