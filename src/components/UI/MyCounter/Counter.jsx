import React, {useState} from 'react';
import CounterControl from './CounterControl';
import classes from "./Counter.module.css"
import classesCounterBtn from "../button/MyButton.module.css"
import MyButton from "../button/MyButton";
import Display from "./Display";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')


    function userCount(){
        setCount(count+Number(value))
        setValue('')
    }

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }
    return (
        <div className={classes.myCounter}>
            <Display value={count}/>
            <CounterControl
                userValue={value}
                onClick={userCount}
                onChange={event => setValue(event.target.value)}
                text="Ввод числа"/>
            <MyButton className={classesCounterBtn.myCounterBtn} onClick={increment}>Добавить</MyButton>
            <MyButton className={classesCounterBtn.myCounterBtn} onClick={decrement}>Отнять</MyButton>
        </div>

    );
};

export default Counter;