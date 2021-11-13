import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo-footer-img.png'
import useAuth from './../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={{ backgroundColor: "#98AFC7" }} variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        <img style={{ maxHeight: "50px" }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} className="text-dark ms-2 btn btn-outline-warning" to="/home">HOME</Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark ms-2 btn btn-outline-warning" to="/products">Products</Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark ms-2 btn btn-outline-warning" to="/userReviews">User Reviews</Nav.Link>
                        {
                            !user?.email ?
                                <>
                                    <NavLink to="/login">
                                        <Button className="text-dark ms-2 btn btn-outline-warning"> log in</Button>
                                    </NavLink>

                                </>
                                : (
                                    <>
                                        <NavLink className="text-decoration-none text-dark ms-2 btn btn-outline-warning" to="/dashboard">Dash Board</NavLink>
                                        <NavDropdown
                                            title={
                                                <img
                                                    style={{
                                                        width: "45px",
                                                        borderRadius: "50%",
                                                    }}
                                                    src={user?.photoURL}
                                                    alt="" />}>
                                            <div className="text-center mx-auto">
                                                <h6>{user?.displayName}</h6>
                                                <p className="m-0 mb-2">{user?.email}</p>
                                                <button onClick={logOut} className="text-dark btn btn-outline-warning">
                                                    SIGN OUT
                                                </button>
                                            </div>
                                        </NavDropdown>
                                    </>
                                )}
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Navigation;