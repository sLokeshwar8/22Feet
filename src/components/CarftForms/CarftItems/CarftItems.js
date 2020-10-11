import React from 'react';

import CraftItem from '../CarftItem/CarftItem';
import classes from './CarftItems.module.css';

const CraftItems = (props) => {

    const craftItem = (
        props.Items ? props.Items.map((item, index) => {
            return <CraftItem name={item.name} image={item.image} key={index}/>
        })  : null
    )

    return (
        <div className={classes.Items}>
            {craftItem}
        </div>
    )
}

export default CraftItems