import React from 'react';

export default function Input(props){
    const id = props.placeholder;
    const field = props.field;
    const setField = props.setField;
    const placeholder = props.placeholder.charAt(0).toUpperCase(0) + props.placeholder.slice(1);
    let type;
    switch(placeholder){
        case 'Password':
            type = 'password';
            break;
        case 'Email':
            type = 'email';
            break;
        case 'Age':
            type = 'number';
            break;
        default:
            type = 'text';
            break;
    }
    return (
        <input
        id={id}
        type={type}
        value={field}
        onChange={e => setField(e.target.value)}
        placeholder={placeholder}
        />
    );
}