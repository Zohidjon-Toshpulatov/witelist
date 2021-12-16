import './Home.css';
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
                    p: { xs: '100px 0 100px 0', lg: '324px 0 20px 0' }
                }}>
                <Typography variant='h2'>Header 1</Typography>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    py: '39px',
                    background: '#f1f1f1'
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '28px', lg: '48px' },
                        fontWeight: '900',
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
                <Container sx={{ mb: '90px' }}>
                    <Typography
                        sx={{
                            fontSize: { xs: '28px', lg: '48px' },
                            fontWeight: '700',
                            color: '#737373',
                            textAlign: 'left',

                        }}
                    >
                        Upcoming Launches
                    </Typography>
                    <ThreeItemSlider />

                </Container>
            </Box>

            <Box sx={{ background: '#ececec', py: '20px' }}>
                <Container sx={{ mb: '90px' }}>
                    <Typography
                        sx={{
                            fontSize: { xs: '28px', lg: '48px' },
                            fontWeight: '700',
                            color: '#737373',
                            textAlign: 'center',

                        }}
                    >
                        New Collections
                    </Typography>
                    <ThreeItemSlider />

                </Container>
            </Box>
            <Box sx={{ background: '#f1f1f1' }}>
                <Container sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
                    <Box
                        sx={{
                            width: { lg: '50%' },
                        }}
                    >
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{
                                fontSize: '36px',
                                color: '#737373',
                                fontWeight: '900',
                                mb: '30px'
                            }}
                        >
                            Ligma
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'left',
                                mb: '32px',
                                px: { lg: '50px' }
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
                    <Box sx={{ width: { xs: '100%', lg: '50%' }, mb: { xs: '50px', lg: '0' } }}>
                        <img className='image' src={miami} alt="placeholder" />
                    </Box>


                </Container>
            </Box>


            <Box sx={{ background: '#ececec' }}>
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: { xs: 'column', lg: 'row' },
                    py: { xs: '40px', lg: '80px' }
                }}>

                    <Box sx={{ display: 'block', mb: { xs: '30px', lg: '0' } }}>
                        <Box sx={{
                            py: '29px',
                            px: '35px',
                            background: '#fff',
                            borderRadius: '38px',
                        }}>

                            <img src={singUp} alt="Sign-up" />
                        </Box>
                        <Typography sx={{ fontSize: '36px', fontWeight: '900' }}>Ligma</Typography>
                    </Box>
                    <Box sx={{ display: 'block', mb: { xs: '30px', lg: '0' } }}>
                        <Box sx={{
                            py: '29px',
                            px: '35px',
                            background: '#fff',
                            borderRadius: '38px',
                        }}>

                            <img src={Confetti} alt="Confetti" />
                        </Box>
                        <Typography sx={{ fontSize: '36px', fontWeight: '900' }}>Ligma</Typography>

                    </Box>
                    <Box sx={{ display: 'block', mb: { xs: '30px', lg: '0' } }}>
                        <Box sx={{
                            py: '29px',
                            px: '35px',
                            background: '#fff',
                            borderRadius: '38px',
                        }}>
                            <img src={Analytics} alt="Analytics" />
                        </Box>
                        <Typography sx={{ fontSize: '36px', fontWeight: '900' }}>Ligma</Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ background: '#f1f1f1' }}>
                <Container sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
                    <Box sx={{ width: { xs: '100%', lg: '50%' }, mb: { xs: '50px', lg: '0' } }}>
                        <img className='image' src={miami} alt="placeholder" />
                    </Box>
                    <Box
                        sx={{
                            width: { lg: '50%' },
                            px: { lg: '50px' }
                        }}
                    >
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{
                                fontSize: '36px',
                                color: '#737373',
                                fontWeight: '900',
                                mb: '30px'
                            }}
                        >
                            Ligma
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'left',
                                mb: '32px'
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
            </Box>

        </div>
    )
}
