import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import UserReview from '../UserReview/UserReview';

const UserReviews = () => {
    const [userReviews, setUserReviews] = useState([])

    useEffect(() => {
        fetch('https://secret-reaches-41807.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div className="">
            <Navigation></Navigation>
            <Container style={{ minHeight: "65vh" }}>
                <h2>ALL Customer Satisfictions Reviews</h2>
                <div className="row pt-5">
                    {
                        userReviews.map(userReview => <UserReview
                            key={userReview._id}
                            userReview={userReview}
                        ></UserReview>)
                    }
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default UserReviews;