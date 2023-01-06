import React from 'react';
import {useState} from "@types/react";


const UserCounter = () => {
    const [value, setValue] = useState(0)

    function userCount(){
        setCount(count+Number(value))
    }
    return (
        <div>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button onClick={userCount}>UserCount</button>
        </div>
    );
};

export default UserCounter;