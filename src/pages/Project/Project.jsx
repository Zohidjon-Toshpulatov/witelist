import { Box, Button, Container, Typography } from "@mui/material"
import { DetailedCard } from "../../components/DetailedCard/DetailedCard";
export const Project = () => {
    return (
        <div>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx=''>
                    <DetailedCard />
                </Box>
                <Box sx={{ width: '50%', }}>
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
        </div>
    )
}
