import React, {useState} from 'react';
import CounterControl from './CounterControl';
import classes from "./Counter.module.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)


    function userCount(){
        setCount(count+Number(value))
        setValue(0)
    }

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }
    return (
        <div className={classes.myCounter}>
            <h1>{count}</h1>
            <CounterControl userControl={{
                value:value,
                setValue:setValue,
                onClick:userCount,
                text:"Ввод числа"}}/>
            <button className={classes.myCounterBtn} onClick={increment}>Добавить</button>
            <button className={classes.myCounterBtn} onClick={decrement}>Отнять</button>
        </div>

    );
};

export default Counter;