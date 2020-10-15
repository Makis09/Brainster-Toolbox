import React from 'react'
import SingleGameInformation from './SingleGameInformation'


function MainGameInformations(props) {


    return (
        <div className='game-main-info'>
            <SingleGameInformation
                icon={['far', 'clock']}
                title='Time Frame'
                description={props.data.timeFrame}
            />
            <SingleGameInformation
                icon='user-friends'
                title='Group Size'
                description={props.data.groupSize}
            />
            <SingleGameInformation
                icon='university'
                title='Facilitation Level'
                description={props.data.level}
            />
            <SingleGameInformation
                icon='paint-roller'
                title='Materials'
                description={props.data.materials}
            />
        </div>
    )
}

export default MainGameInformations;