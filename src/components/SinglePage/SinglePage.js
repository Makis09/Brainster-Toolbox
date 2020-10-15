import React from 'react';
import './SinglePage.css'
import ClippedBackground from '../ClippedBackground/ClippedBackground';
import MainGameInformations from './MainGameInformations';
import GameDescription from './GameDescription';
import GameSteps from './GameSteps';
import BottomOfPage from '../BottomOfPage/BottomOfPage';
import Zoom from 'react-reveal';

function SinglePage(props) {

    return (
        <Zoom >
            <>
                <ClippedBackground className='singleGame-top' background={props.data.id} />
                <div className='SinglePage'>
                    <h1>{props.data.title}</h1>
                    <MainGameInformations data={props.data} />
                    <GameDescription description={props.data.description} />
                    <GameSteps steps={props.data.steps} />
                    <BottomOfPage />
                </div>
            </>
        </Zoom>
    )
}

export default SinglePage;