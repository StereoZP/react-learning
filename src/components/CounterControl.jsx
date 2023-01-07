import React from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const CounterControl = (props) => {

    return (
        <div>
            <span>Введите своё число:</span>
            <MyInput className="inputCounter" value={props.userControl.value}
                   onChange={event => props.userControl.setValue(event.target.value)}
            />
            <MyButton className="buttonContainer" onClick={props.userControl.onClick}>
                    {props.userControl.text}
            </MyButton>
        </div>
    );
};

export default CounterControl;