import React from 'react';
import SingleButton from './SingleButton';


function CategoryFilters(props) {

    return (
        <div className='browse-category'>
            <h5> Browse by Category</h5>
            <div className='buttons-container'>
                {props.data.map((element, index) =>
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
                {props.children}
            </div>
        </div>
    )
}

export default CategoryFilters;