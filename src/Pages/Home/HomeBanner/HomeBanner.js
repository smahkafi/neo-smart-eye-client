import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leftimg from '../../../img/main-home-rev-img-19.webp';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 left-img" >
                <img src={leftimg} alt="glass" style={{ width: '50%' }} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 right-img ">
                <h2 className="text-uppercase text-white">A Varaity of stylis</h2>
                <p className="text-uppercase text-white">A find the best possible for you</p>
                <Link to="/products">
                    <Button className="text-uppercase btn-primary">Explore more</Button>
                </Link>
            </div>
        </div>
    );
};

export default HomeBanner;