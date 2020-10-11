import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>HOME</NavigationItem>
        <NavigationItem link="/store" >LOCATE A STORE</NavigationItem>
    </ul>
);


export default NavigationItems;