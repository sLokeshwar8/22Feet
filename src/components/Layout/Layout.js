import React, {useState} from  'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

    const [showSideDrawer, setshowSideDrawer] = useState(false);
    

    const sideDrawerClosedHandler = () => {
        setshowSideDrawer(false)
    }

    const sideDrawerToggleHandler = () => {
        setshowSideDrawer( ( prevState ) => { 
            return !prevState.showSideDrawer
        });
    }

    return(
        <div>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
                open={showSideDrawer} 
                closed={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout