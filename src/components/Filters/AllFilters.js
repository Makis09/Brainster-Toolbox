import React, { useState, useEffect, useRef } from 'react';
import './Filters.css';
import SingleButton from './SingleButton';
import ShowAllButton from './ShowAllButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AllFilters(props) {
    const [isHidden, setIsHidden] = useState({
        category: null,
        timeframe: null,
        groupsize: null,
    })
    const [windowWidth, setwindowWidth] = useState();
    const [isVisible, setisVisible] = useState(true);
    const prevScrollPos = useRef();

    useEffect(() => {
        window.addEventListener('resize', reportWindowSize);
        window.addEventListener("scroll", handleScroll);
        setwindowWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', reportWindowSize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const reportWindowSize = () => {
        setwindowWidth(window.innerWidth);
    }

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos.current) {
            setisVisible(false);
        } else { setisVisible(true) };
        prevScrollPos.current = currentScrollPos;
    }

    useEffect(() => {
        if (windowWidth < 600) {
            setIsHidden({
                category: true,
                timeframe: true,
                groupsize: true
            })
        } else {
            setIsHidden({
                category: false,
                timeframe: false,
                groupsize: false
            })
        }
    }, [windowWidth])

    let allCategories = new Map();

    props.filterButtons.category.forEach(element => {
        allCategories.set(element, 0)
    })
    allCategories.forEach((value, key, allCategories) => {
        props.filterButtons.category.forEach(element => {
            if (key === element) {
                value = value + 1
                allCategories.set(key, value)
            }
        })
    })

    let categoryBtnsKeyValue = [...allCategories];

    let activeStyle = {
        backgroundColor: '#41187E',
        color: 'white'
    }

    const browseBy = (e) => {
        let clicked = e.target.innerText;
        setIsHidden({
            category: true,
            timeframe: true,
            groupsize: true
            , [clicked]: !isHidden[clicked]
        })
    }

    return (
        <div className={`AllFilters ${!isVisible ? 'hidden-filter' : null} `}>
            {!isHidden.category && <div className='browse-category'>
                <h5>Category</h5>
                <div className='buttons-container'>
                    {categoryBtnsKeyValue.map((element, index) =>
                        <SingleButton
                            key={index}
                            filter={props.changeActiveFilters}
                            description={element[0]}
                            count={element[1]}
                            filterBy='category'
                            default={props.default}
                            activeFilters={props.activeFilters.category}
                        />
                    )}
                    <ShowAllButton
                        key='ALL'
                        filter={props.resetFilters}
                        description='Сите'
                        count={props.filterButtons.category.length}
                        filterBy='category'
                        default={props.default}
                    />
                </div>
            </div>}
            {!isHidden.timeframe && <div className='browse-timeframe'>
                <h5>Time frame(minutes)</h5>
                <div className='buttons-container'>
                    {props.filterButtons.timeFrame.map((element, index) =>
                        <SingleButton
                            key={index}
                            filter={props.changeActiveFilters}
                            description={element}
                            filterBy='timeFrame'
                            default={props.default}
                            activeFilters={props.activeFilters.timeFrame}

                        />
                    )}
                </div>
            </div>}
            {!isHidden.groupsize && <div className='browse-groupsize'>
                <h5>Group size</h5>
                <div className='buttons-container'>
                    {props.filterButtons.groupSize.map((element, index) =>
                        <SingleButton
                            key={index}
                            filter={props.changeActiveFilters}
                            description={element}
                            filterBy='groupSize'
                            default={props.default}
                            activeFilters={props.activeFilters.groupSize}

                        />
                    )}
                </div>
            </div>}
            <div className='mobile-filters-holder'>
                <h5>Browse by</h5>
                <button style={props.activeFilters.category.length > 0 ? activeStyle : null} onClick={(e) => browseBy(e)}>category</button>
                <button style={props.activeFilters.timeFrame.length > 0 ? activeStyle : null} onClick={(e) => browseBy(e)}>timeframe</button>
                <button style={props.activeFilters.groupSize.length > 0 ? activeStyle : null} onClick={(e) => browseBy(e)}>groupsize</button>
                {(!isHidden.category || !isHidden.timeframe || !isHidden.groupsize) &&
                    <FontAwesomeIcon
                        icon={['far', 'times-circle']}
                        size='lg'
                        onClick={() => setIsHidden({
                            category: true,
                            timeframe: true,
                            groupsize: true
                        })} />}
            </div>
        </div >
    )
}

export default AllFilters;