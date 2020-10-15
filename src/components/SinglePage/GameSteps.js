import React from 'react';

function GameSteps(props) {

    return (
        <div className='GameSteps'>
            {props.steps &&
                props.steps.map((step, index) =>
                    <div className='Step' key={index}>
                        <h4>{step.step}</h4>
                        <p>{step.stepDescription}</p>
                    </div>
                )}
        </div>
    )
}

export default GameSteps;