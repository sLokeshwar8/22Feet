import React from 'react';
import { Carousel } from 'antd';

import classes from './Carousel.module.css';

//media
import CarouselImg1  from '../../../assets/carousel1.png';

const CarouselFun = () => {

    const carouselStyle = [classes.Width70Per, classes.CarouselContainer];

    return (
        <Carousel>
            <div>
                <img className={carouselStyle.join(" ")} src={CarouselImg1} alt="carousel1"/>
            </div>
            <div>
                <img className={carouselStyle.join(" ")} src={CarouselImg1} alt="carousel1"/>
            </div>
            <div>
                <img className={carouselStyle.join(" ")} src={CarouselImg1} alt="carousel1"/>
            </div>
            <div>
                <img className={carouselStyle.join(" ")} src={CarouselImg1} alt="carousel1"/>
            </div>
        </Carousel>
    )
}

export default CarouselFun
