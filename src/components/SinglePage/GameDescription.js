import React from 'react';


function GameDescription(props) {

    return (
        <>
            {props.description &&
                <p className='GameDescription'>
                    {props.description}
                </p>
            }
        </>
    )
}

export default GameDescription;