import React, {useState} from 'react';
import CounterControl from './CounterControl';
import MyButton from "./UI/button/MyButton";
//import classes from './UI/button/MyButton.module.css';

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
        <div>
            <h1>{count}</h1>
            <CounterControl userControl={{
                value:value,
                setValue:setValue,
                onClick:userCount,
                text:"Ввод числа"}}/>
            <MyButton onClick={increment}>Добавить</MyButton>
            <MyButton onClick={decrement}>Отнять</MyButton>

        </div>

    );
};

export default Counter;