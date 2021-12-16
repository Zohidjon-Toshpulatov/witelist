import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import malibu from '../../assets/malibu.jpg';

export const DetailedCard = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345, border: '0', '&:hover': { background: 'transparent' } }}>
                <CardActionArea sx={{ border: 'none', background: 'transparent', 'boxShadow': 'none' }}>
                    <CardMedia
                        component="img"
                        height="330"
                        image={malibu}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            0.3 ETH | 5,000
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2024 SIGN UPS
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
