import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

//media
import logo  from '../../../assets/logo.png';

const SideDrawer = (props) => {
    let attchedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attchedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div>
            <Backdrop show={props.open}  clicked={props.closed} />
            <div className={attchedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <img className={classes.LogoImg} src={logo} alt="logo"/> 
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </div>
    );
};

export default SideDrawer;