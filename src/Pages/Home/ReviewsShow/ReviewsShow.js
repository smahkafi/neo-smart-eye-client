import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        reviews.map(review => <ReviewShow
                            key={review._id}
                            review={review}
                        ></ReviewShow>)
                    }
                </div>
                <Link to="/userReviews">
                    <input
                        type="submit"
                        value="Explore More"
                        className="fw-bold text-muted p-2 m-2 w-25 btn btn-light btn-outline-warning"
                    />
                </Link>
            </Container>
        </div>
    );
};

export default ReviewsShow;