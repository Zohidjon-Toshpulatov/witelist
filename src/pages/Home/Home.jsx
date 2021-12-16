import { Box, Button, Container, Typography } from "@mui/material";
import miami from '../../assets/miami.jpg';
import singUp from '../../assets/sign-up.png';
import Confetti from '../../assets/confetti.png';
import Analytics from '../../assets/analytics.png';
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import { ThreeItemSlider } from "../../components/ThreeItemSlider/ThreeItemSlider";

export const Home = () => {
    return (
        <div>
            <Box
                sx={{
                    background: '#ececec',
                    p: '324px 0 20px 0'
                }}>
                <Typography variant='h2'>Header 1</Typography>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    py: '39px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '28px', lg: '48px' },
                        fontWeight: '700',
                        color: '#737373'
                    }}
                >
                    Explore
                </Typography>
                <SimpleSlider />
                <Box sx={{ display: 'block', w: { lg: '40%' }, py: { xs: '20px', lg: '105px' } }}>
                    <Typography sx={{ textTransform: 'capitalize', fontSiz: '22px', fontWeight: '900' }}>
                        LIMITED EDITION DROPS
                        <br />
                        VERIFIED BY WL
                    </Typography>
                </Box>

            </Box>
            <ThreeItemSlider />
            <Box>

                <Container sx={{ display: 'flex' }}>
                    <Box
                        sx={{
                            width: '50%',
                        }}
                    >
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{
                                fontSize: '36px',
                                color: '#737373',
                                fontWeight: '900'
                            }}
                        >
                            Ligma
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'left'
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
                                px: '15px',
                                py: '5px',
                                '&:hover': { border: '1px solid white' }
                            }}
                        >
                            Select Wallet
                        </Button>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <img src={miami} alt="placeholder" />
                    </Box>


                </Container>
                <Container sx={{
                    display: 'flex', justifyContent: 'space-around',
                }}>

                    <Box sx={{ display: 'block', }}>
                        <Box sx={{
                            py: '29px',
                            px: '35px',
                            background: '#ececec',
                            borderRadius: '38px',
                        }}>

                            <img src={singUp} alt="Sign-up" />
                        </Box>
                        <Typography sx={{ fontSize: '36px', fontWeight: '900' }}>Ligma</Typography>
                    </Box>
                    <Box sx={{ display: 'block', }}>
                        <Box sx={{
                            py: '29px',
                            px: '35px',
                            background: '#ececec',
                            borderRadius: '38px',
                        }}>

                            <img src={Confetti} alt="Confetti" />
                        </Box>
                        <Typography sx={{ fontSize: '36px', fontWeight: '900' }}>Ligma</Typography>

                    </Box>
                    <Box sx={{ display: 'block', }}>
                        <Box sx={{
                            py: '29px',
                            px: '35px',
                            background: '#ececec',
                            borderRadius: '38px',
                        }}>
                            <img src={Analytics} alt="Analytics" />
                        </Box>
                        <Typography sx={{ fontSize: '36px', fontWeight: '900' }}>Ligma</Typography>
                    </Box>
                </Container>
                <Container
                    sx={{ display: 'flex' }}>
                    <Box
                        sx={{
                            width: '50%'
                        }}
                    >
                        <img src={miami} alt="placeholder" />
                    </Box>
                    <Box
                        sx={{
                            width: '50%',
                        }}
                    >
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{
                                fontSize: '36px',
                                color: '#737373',
                                fontWeight: '900'
                            }}
                        >
                            Ligma
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'left'
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
                                px: '15px',
                                py: '5px',
                                '&:hover': { border: '1px solid white' }
                            }}
                        >
                            Select Wallet
                        </Button>
                    </Box>


                </Container>

            </Box>
        </div>
    )
}
