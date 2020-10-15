import React from 'react';


function ShowAllButton(props) {


    let activeStyle = {
        backgroundColor: '#41187E',
        color: 'white'
    }

    return (
        <button
            style={props.default ? activeStyle : null}
            onClick={() => props.filter(props.filterBy, props.description)}
        >
            {props.description}
            <span>{props.count && `(${props.count})`}</span>
        </button>
    )
}

export default ShowAllButton;