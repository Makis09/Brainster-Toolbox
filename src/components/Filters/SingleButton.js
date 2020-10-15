import React, { useState } from 'react';

function SingleButton(props) {
    const [checked, setChecked] = useState(false);

    let activeStyle = {
        backgroundColor: '#41187E',
        color: 'white'
    }

    if (props.default && checked) {
        setChecked(false)
    }
    if (!checked && props.activeFilters.includes(props.description)) {
        setChecked(true)
    }

    return (
        <button
            style={checked ? activeStyle : null}
            onClick={() => { setChecked(!checked); props.filter(props.filterBy, props.description, !checked) }}
        >
            {props.description}
            <span>{props.count && `(${props.count})`}</span>
        </button>
    )
}

export default SingleButton;