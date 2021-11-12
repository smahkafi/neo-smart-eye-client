import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../img/Carousel/slider-1.jpg'
import slider2 from '../../../img/Carousel/slider-2.jpg'
import slider3 from '../../../img/Carousel/slider-3.jpg'
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carosel-img"
                    src={slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carosel-img"
                    src={slider2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carosel-img"
                    src={slider3}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;