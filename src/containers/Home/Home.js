import React from 'react';

import Carousel from '../../components/UI/Carousel/Carousel';
import CarftForms from '../../components/CarftForms/CarftForms';
import classes from './Home.module.css';

const Home = (props) => {

      
    return (
        <div className={classes.Background}>
            <Carousel />
            <CarftForms />
        </div>
    )
}

export default Home