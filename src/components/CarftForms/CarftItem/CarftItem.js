import React from 'react';

import classes from './CarftItem.module.css';

const CraftItems = (props) => {

    const Img = (imgName) => {
        return require (`../../../assets/Itmes/${imgName}`)
    }

    return (
        <div className={classes.Item}>
            <img className={classes.Image} src={Img(props.image)} alt={Img(props.image) + "img"}/>
            <span>{props.name}</span>
        </div>
    )
}

export default CraftItems