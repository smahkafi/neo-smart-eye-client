import React, { useEffect, useState } from 'react';
import ReviewShow from '../ReviewShow/ReviewShow';

const ReviewsShow = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://secret-reaches-41807.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="row">
                {
                    reviews.map(review => <ReviewShow
                        key={review._id}
                        review={review}
                    ></ReviewShow>)
                }
            </div>
        </div>
    );
};

export default ReviewsShow;