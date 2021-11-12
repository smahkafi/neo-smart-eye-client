import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Instagram.css'
import insta1 from '../../../img/instagram/1.jpg'
import insta2 from '../../../img/instagram/2.jpg'
import insta3 from '../../../img/instagram/3.jpg'
import insta4 from '../../../img/instagram/4.jpg'
import insta5 from '../../../img/instagram/5.jpg'

const Instagram = () => {
    return (
        // bg-dark
        <div className="bg-dark mt-5 py-5">
            <Container>
                <div className="text-white py-5">
                    <h2> Visit our instagram </h2>
                    <p>Check our latest posts now</p>

                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-1">
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <a href="https://www.instagram.com" target="_blank">
                                <div class="insta">
                                    <img src={insta1} alt="person" style={{ width: "100%" }} />
                                    <div class="content">
                                        <FontAwesomeIcon icon={faInstagram} className="h1 text-white mt-5"></FontAwesomeIcon>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <a href="https://www.instagram.com" target="_blank">
                                <div class="insta">
                                    <img src={insta2} alt="person" style={{ width: "100%" }} />
                                    <div class="content">
                                        <FontAwesomeIcon icon={faInstagram} className="h1 text-white mt-5"></FontAwesomeIcon>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <a href="https://www.instagram.com" target="_blank">
                                <div class="insta">
                                    <img src={insta3} alt="person" style={{ width: "100%" }} />
                                    <div class="content">
                                        <FontAwesomeIcon icon={faInstagram} className="h1 text-white mt-5"></FontAwesomeIcon>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <a href="https://www.instagram.com" target="_blank">
                                <div class="insta">
                                    <img src={insta4} alt="person" style={{ width: "100%" }} />
                                    <div class="content">
                                        <FontAwesomeIcon icon={faInstagram} className="h1 text-white mt-5"></FontAwesomeIcon>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <a href="https://www.instagram.com" target="_blank">
                                <div class="insta">
                                    <img src={insta5} alt="person" style={{ width: "100%" }} />
                                    <div class="content">
                                        <FontAwesomeIcon icon={faInstagram} className="h1 text-white mt-5"></FontAwesomeIcon>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-1">
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default Instagram;