import { Box } from "@mui/material";
import Slider from "react-slick";
import { SimpleCard } from "../SimpleCard/SimpleCard";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <div>
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
        </div>

    );
}