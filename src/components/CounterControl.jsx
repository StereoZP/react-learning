import React from 'react';
import MyInput from "./UI/input/MyInput";
import classes from "./Counter.module.css"


const CounterControl = (props) => {

    return (
        <div>
            <span>Введите своё число:</span>
            <MyInput value={props.userControl.value}
                   onChange={event => props.userControl.setValue(event.target.value)}
            />
            <button className={classes.myCounterBtn} onClick={props.userControl.onClick}>
                    {props.userControl.text}
            </button>
        </div>
    );
};

export default CounterControl;