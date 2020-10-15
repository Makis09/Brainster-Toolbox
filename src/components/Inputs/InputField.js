import React from 'react';
import './Inputs.css';

function InputField(props) {

    return (
        <div className='inputContainer'>
            <div className='inputBox'>
                <input
                    type={props.type}
                    id={props.for}
                    name={props.for}
                    required
                />
                <label
                    htmlFor={props.for}>
                    {props.description}
                </label>
                <span></span>
            </div>
        </div>
    )
}

export default InputField;