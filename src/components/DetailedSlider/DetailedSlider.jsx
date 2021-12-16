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
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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