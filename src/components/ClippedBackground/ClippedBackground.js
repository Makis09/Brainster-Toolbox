import React, { useEffect, useState } from 'react';
import './ClippedBackground.css';
import { useLocation } from 'react-router-dom';

function ClippedBackground(props) {
    const [homepageActive, setHomepageActive] = useState(false);
    let location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setHomepageActive(true)
        } else {
            setHomepageActive(false)
        }
    }, [location]);

    let style = {
        height: '130vh'
    }

    let backgroundImage;

    if (props.background) {
        const imageUrl = require(`../../assets/images/game images/${props.background}.jpg`)
        backgroundImage = {
            backgroundImage: `url(${imageUrl})`
        }
    }

    return (
        <div
            className={`ClippedBackground ${props.className}`}
            style={homepageActive ? style : props.background ? backgroundImage : null }>
        </div>
    )
}

export default ClippedBackground;