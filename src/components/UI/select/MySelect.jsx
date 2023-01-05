import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => {
                console.log(event)
                onChange(event.target.value)
            }}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={options.value} label={options.name}>
                    {option.name}
                </option> )}

        </select>
    );
};

export default MySelect;