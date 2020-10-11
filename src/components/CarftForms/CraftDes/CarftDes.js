import React from 'react';

import classes from './CarftDes.module.css';

const CraftDes = (props) => {

      
    return (
        <div style={{marginTop: 100}}>
            <h1 className={classes.Header}>{props.Title}</h1> 
            <p  className={classes.Para}>{props.Paragraph}</p>
        </div>
    )
}

export default CraftDes