import React from 'react';

const ReviewShow = (props) => {
    const { name, rating, comment } = props.review
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <p>{name}</p>
            <p>{rating}</p>
            <p>{comment}</p>
        </div>
    );
};

export default ReviewShow;