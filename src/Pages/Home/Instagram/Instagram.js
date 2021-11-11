import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Instagram.css'
// import  from ''
// import insta2 from '../../../img/instagram/2.jpg'
// import insta3 from '../../../img/instagram/3.jpg'
// import insta4 from '../../../img/instagram/4.jpg'
// import insta5 from '../../../img/instagram/5.jpg'

const Instagram = () => {
    return (
        // bg-dark
        <div className=" mt-5 py-5">
            <Container>
                <div className="text-white  py-5">
                    <h2> Visit our instagram </h2>
                    <p>Check our latest posts now</p>
                </div>
                {/* row section */}
                <div className="row  pb-5">
                    <div className="col-sm-12 col-md-1 col-lg-1">
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 insta1 align-self-center">
                        <FontAwesomeIcon icon={faInstagram} className="h3"></FontAwesomeIcon>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 insta2">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 insta3">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 insta4">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 insta5">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </div>
                    <div className="col-sm-12 col-md-1 col-lg-1">
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Instagram;