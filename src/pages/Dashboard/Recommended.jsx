import React, { useRef } from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar'
import Slider from 'react-slick'
import Rslide from './Rslide'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommended = () => {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
      
    const slideRef = useRef()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slideRight = () => {
        slideRef.current.slickNext();
    }
    const slideLeft = () => {
        slideRef.current.slickPrev();
    }
    return (
        <div className='container-fluid p-0 recc '>
            {/* <Navbar /> */}
            <div className="container py-5 reccc">
                <div className="dbwlcml">
                    <h5 className='my-1'>Recommended Jobs</h5>

                    <div className="mt-5 mx-4 relative-slider-container">
                        <Slider ref={slideRef} {...settings}>
                            <Rslide />
                            <Rslide />
                            <Rslide />
                            <Rslide />
                            <Rslide />
                            <Rslide />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended
