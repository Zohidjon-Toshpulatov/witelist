import { Box, Container } from "@mui/material"
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../DetailedSlider/DetailedSlider";
import { SimpleCard } from "../SimpleCard/SimpleCard";

export const ThreeItemSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <div>
            <Container>
                <Slider {...settings}>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                    <Box sx={{ py: '30px', mr: '8px' }}>
                        <SimpleCard />
                    </Box>
                </Slider>
            </Container>
        </div>
    )
}
