import React from 'react';

const Rating = ({rating, color}) => {
    return (
        <div className={`text-${color}-600`}>
            <i className={`${rating > 0 ? 'fas fa-star' : 'far fa-star'}`}>

            </i>
            <i className={`${rating > 1 ? 'fas fa-star' : 'far fa-star'}`}>

            </i>
            <i className={`${rating > 2 ? 'fas fa-star' : 'far fa-star'}`}>

            </i>
            <i className={`${rating > 3 ? 'fas fa-star' : 'far fa-star'}`}>

            </i>
            <i className={`${rating > 4 ? 'fas fa-star' : 'far fa-star'}`}>

            </i>
        </div>
    );
};

export default Rating;