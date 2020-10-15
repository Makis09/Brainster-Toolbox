import React, { useState } from 'react';


function CourseCard(props) {
    const [hovered, setHovered] = useState(false);

    const style = {
        margin: '0 auto',
        opacity: '1'
    }
    return (
        <a target='_blank'
            rel="noopener noreferrer"
            href={props.link} className='CourseCard' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <h3 style={hovered ? { margin: '10px 0' } : null}>{props.description}</h3>
            <span style={hovered ? style : null}

            >Дознај повеќе
            </span>
        </a>
    )
}

export default CourseCard;