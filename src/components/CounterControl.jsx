import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import classesCounterBtn from "./UI/button/MyButton.module.css"


const CounterControl = ({userValue, onClick, onChange, text}) => {

    return (
        <div>
            <span>Введите своё число:</span>
            <MyInput value={userValue}
                     onChange={onChange}
            />
            <MyButton className={classesCounterBtn.myCounterBtn}
                      onClick={onClick}>
                      {text}
            </MyButton>
        </div>
    );
};

export default CounterControl;