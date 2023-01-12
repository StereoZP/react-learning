import React from 'react';
import classes from './Display.module.css'

const Display = ({value}) => {
    return (
        <div className={classes.display}>
            {value}
        </div>
    );
};

export default Display;