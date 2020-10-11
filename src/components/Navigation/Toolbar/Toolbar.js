import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

//media
import logo  from '../../../assets/logo.png';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <img className={classes.LogoImg} src={logo} alt="logo"/> 
        </div>
        <nav className={classes.desktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar