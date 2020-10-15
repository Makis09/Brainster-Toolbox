import React from 'react';
import './AllGameCards.css';
import SingleGameCard from './SingleGameCard/SingleGameCard';


function AllGameCards(props) {
    return (
        <div className='AllGameCards'>
            {Array.isArray(props.data) ?
                props.data.map(game => (
                    <SingleGameCard
                        key={game.id}
                        id={game.id}
                        image={game.image}
                        title={game.title}
                        category={game.category}
                        timeFrame={game.timeFrame}
                        test={props.test}
                    />
                )) :
                <h1 className='no-games'>{props.data}</h1>}
        </div>
    )
}

export default AllGameCards;