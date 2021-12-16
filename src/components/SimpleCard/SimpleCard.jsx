import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import malibu from '../../assets/malibu.jpg';
export const SimpleCard = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345, borderRadius: '20px', p: '10px', background: '#ECECEC}' }} >
                <CardActionArea sx={{ border: 'none', background: 'transparent', 'boxShadow': 'none', '&:hover': { background: 'transparent', } }}>
                    <CardMedia
                        sx={{ borderRadius: '20px' }}
                        component="img"
                        height="330"
                        image={malibu}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Project
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div >
    )
}


