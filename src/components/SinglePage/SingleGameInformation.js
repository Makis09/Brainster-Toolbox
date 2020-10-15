import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SingleGameInformation(props) {
    return (
        <div className='SingleGameInformation'>
            <FontAwesomeIcon icon={props.icon} size='lg' />
            <div>
                <span>{props.title}</span>
                <br />
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default SingleGameInformation;