import React from 'react';


function SelectField(props) {

    return (
        <div className='inputContainer'>
            <div className='inputBox'>
                <select name={props.for} id={props.for}>
                {props.options.map((option, i) =>
                    <option key={i} value={option}>{option}</option>
                )}
                </select>
                <label className='select-field-label' htmlFor={props.for}>{props.description}</label>
            </div>
        </div>
    )
}

export default SelectField;