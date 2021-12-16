import { Box, Button, Container, Typography } from "@mui/material"
import { DetailedCard } from "../../components/DetailedCard/DetailedCard";

export const Project = () => {
    return (
        <div>
            <Box sx={{
                py: { xs: '30px', lg: '54px' },
                display: "block",
                background: '#f1f1f1'
            }}>
                <Typography
                    sx={{
                        fontSize: { xs: '28px', lg: '48px' },
                        fontWeight: '900',
                        color: '#737373'
                    }}
                >
                    Project Title
                </Typography>
            </Box>
            <Box sx={{
                display: "block",
                background: '#ececec'
            }}>
                <Container sx={{
                    display: 'flex', justifyContent: 'space-between',
                    px: '20px',
                    flexDirection: {
                        xs: 'column', lg: 'row'
                    }
                }}>
                    <Box sx={{ my: '20px' }}>
                        <DetailedCard />
                    </Box>
                    <Box sx={{ width: { lg: '50%' }, my: '20px' }}>
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{
                                fontSize: '36px',
                                color: '#737373',
                                fontWeight: '900',
                                textAlign: 'center'
                            }}
                        >
                            Ligma
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'left',
                                mb: '32px',
                                p: { lg: '50px' }
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus reiciendis qui omnis, velit natus aliquid dolores
                            quia consequuntur temporibus, iste asperiores possimus quas
                            debitis eaque dignissimos laborum cum nobis? Eveniet beatae
                            non earum nostrum ex enim tempora voluptate itaque deleniti
                            adipisci! Optio aspernatur nesciunt dicta modi esse obcaecati
                            inventore maiores.
                        </Typography>
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

                </Container>
                <Box sx={{ display: 'block', background: '#f1f1f1', w: { lg: '40%' }, py: { xs: '20px', lg: '105px' } }}>
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
