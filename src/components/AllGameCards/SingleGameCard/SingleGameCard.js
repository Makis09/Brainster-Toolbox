import React from 'react';
import './SingleGameCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function SingleGameCard(props) {

    return (
        <Link className="SingleGameCard card"
            onClick={props.test}
            to={{
                pathname: `/game/${props.id}`,
                state: { game: true }
            }
            }>
            <div className='card-img'>
                <img src={require(`../../../assets/images/game images/${props.id}.jpg`)} alt="" />
            </div>
            <div className='card-body'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='game-title-category'>
                        <div className='game-title'>
                            {props.title}
                        </div>
                        <div className='category'>
                            <span>Категорија:</span>
                            <span> {props.category}</span>
                        </div>
                    </div>
                    <div className='game-icon'>
                        <div>
                            <img src={`${props.image}`} alt="" />
                        </div>

                    </div>
                </div>
                <div className='time-frame' >
                    <FontAwesomeIcon icon={['far', 'clock']} size='lg' />
                    <div>
                        <span>Времетраeње</span>
                        <br />
                        <span>{props.timeFrame}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SingleGameCard;