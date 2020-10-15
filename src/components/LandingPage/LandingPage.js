import React from 'react';
import ClippedBackground from '../ClippedBackground/ClippedBackground';
import Header from '../Header/Header';
import Credits from '../Credits/Credits';
import AllGameCards from '../AllGameCards/AllGameCards';
import Filters from '../Filters/AllFilters';
import BottomOfPage from '../BottomOfPage/BottomOfPage';
import { Slide } from 'react-reveal';

function HomePage(props) {
    return (

        <>
            <ClippedBackground className='homepage-top' />
            {props.fetched && <>
                <Credits />
                <Slide right>
                    <Header />
                </Slide>
                <Slide left>
                    <Filters
                        changeActiveFilters={props.changeActiveFilters}
                        filterButtons={props.filterButtons}
                        resetFilters={props.resetFilters}
                        default={props.default}
                        activeFilters={props.activeFilters}
                        animate={props.animate}
                    />
                </Slide>
                <Slide bottom>
                    <AllGameCards data={props.data}
                        test={props.test}
                    />
                </Slide>
                <BottomOfPage />
            </>}
        </>

    )
}

export default HomePage;