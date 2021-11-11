import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo-footer-img.webp'

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container >
                <div className="row align-self-center">
                    <div className="col-sm-6 col-md-6 col-lg-3 align-self-center">
                        <img className="" src={logo} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <h2>SERVICES</h2>
                        <Link className="text-decoration-none">

                            <p>Book eye test</p>
                            <p>Vision therapy</p>
                            <p>Vouchers</p>
                            <p>Lenses & prices</p>
                            <p>Eye health</p>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <h2>SERVICES</h2>
                        <Link className="text-decoration-none">

                            <p>Book eye test</p>
                            <p>Vision therapy</p>
                            <p>Vouchers</p>
                            <p>Lenses & prices</p>
                            <p>Eye health</p>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <h2>SERVICES</h2>
                        <Link className="text-decoration-none">
                            <p>Book eye test</p>
                            <p>Vision therapy</p>
                            <p>Vouchers</p>
                            <p>Lenses & prices</p>
                            <p>Eye health</p>
                        </Link>
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default Footer;