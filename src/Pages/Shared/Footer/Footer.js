import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo-footer-img.png'

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container >
                <div className="row align-self-center">
                    <div className="col-sm-6 col-md-6 col-lg-3 align-self-center">
                        <img className="" src={logo} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 text-start">
                        <h4 className="text-white fw-normal">Contact Us</h4>
                        <Link to="/" className="text-decoration-none">
                            <p className="text-white">  451 Wall Street, UK, London</p>
                        </Link>
                        <Link to="/" className="text-decoration-none">
                            <p className="text-white">Phone: (+084) 333-1233</p>
                        </Link>
                        <Link to="/" className="text-decoration-none">
                            <p className="text-white">demo@demo.com</p>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 text-start">
                        <h4 className="text-white fw-normal">DESIGN BLOG</h4>
                        <Link to="/" className="text-decoration-none text-white">
                            <p>Blog</p>
                        </Link>
                        <Link to="/" className="text-decoration-none text-white">
                            <p>Forums</p>
                        </Link>
                        <Link to="/" className="text-decoration-none text-white">
                            <p>Builders Showcase</p>
                        </Link>
                        <Link to="/" className="text-decoration-none text-white">
                            <p>How-To Guides</p>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 text-start">
                        <h4 className="text-white fw-normal">SIGN UP FOR EMAIL</h4>
                        <form>
                            <p className="text-white fw-normal p-0 m-0">Send me obliges news, updates and offers.</p>
                            <div className="">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label text-white" for="exampleCheck1">Check me out</label>
                                <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="form-check p-0">
                                <Button type="submit" className=" btn-primary">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default Footer;