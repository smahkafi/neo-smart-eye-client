import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className="bg-img">
                <Container>
                    <div className="row align-middle">
                        <div className="col-sm-12 col-md-5 col-lg-5">

                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 content-about">

                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 content-about mt-5 ">
                            <h4>WHAT WE'RE ABOUT</h4>
                            <h2 className="fw-normal">SEE THE WORLD
                                DIFFERENTLY</h2>
                            <p>We make everyday life look and feel ten times better. How?
                                Click on the links below to see for yourself.</p>

                            <Link to="/products" className="p-0">
                                <Button className="rounded-pill bg-dark p-1">
                                    <small className="px-3 shop-content">Shop Now</small>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AboutUs;