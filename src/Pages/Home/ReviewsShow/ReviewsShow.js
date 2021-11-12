import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReviewShow from '../ReviewShow/ReviewShow';
import './ReviewsShow.css'

const ReviewsShow = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://secret-reaches-41807.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="main-contained mt-5 py-5">
            <Container>
                <h2>Customer Satisfictions</h2>
                <div className="row pt-5">
                    {
                        reviews.slice(0, 3).map(review => <ReviewShow
                            key={review._id}
                            review={review}
                        ></ReviewShow>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default ReviewsShow;