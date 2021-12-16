import { Box } from "@mui/material";
import Slider from "react-slick";
import { DetailedCard } from '../DetailedCard/DetailedCard'

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export default function DetailedSlider() {
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
                    <DetailedCard />
                </Box>
                <Box sx={{ py: '30px', mr: '8px' }}>
                    <DetailedCard />
                </Box>
                <Box sx={{ py: '30px', mr: '8px' }}>
                    <DetailedCard />
                </Box>
                <Box sx={{ py: '30px', mr: '8px' }}>
                    <DetailedCard />
                </Box>
                <Box sx={{ py: '30px', mr: '8px' }}>
                    <DetailedCard />
                </Box>
                <Box sx={{ py: '30px', mr: '8px' }}>
                    <DetailedCard />
                </Box>
                <Box sx={{ py: '30px', mr: '8px' }}>
                    <DetailedCard />
                </Box>
            </Slider>
        </div>

    );
}