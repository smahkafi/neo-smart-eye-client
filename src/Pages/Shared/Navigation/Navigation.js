import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo-footer-img.webp'
import useAuth from './../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    // const { allContext } = useAuth();
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} className="text-dark" to="/home">HOME</Nav.Link>
                        <Nav.Link as={NavLink} className="text-dark" to="/products">Products</Nav.Link>

                        {
                            user?.email ?
                                <>
                                    <Button Button onClick={logOut} className="ms-2 btn-primary">Log Out</Button>
                                    <NavLink to="/dashboard">Dash Board</NavLink>
                                </>

                                // <Nav.Link as={NavLink} className="text-dark" to="/dashboard">DASHBOARD</Nav.Link>
                                : (
                                    <>
                                        <NavLink to="/login">
                                            <Button className="btn-primary"> log in</Button>
                                        </NavLink>

                                        {/* <NavDropdown
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
                                                <button onClick={logOut} className="btn btn-primary">
                                                    SIGN OUT
                                                </button>
                                            </div>
                                        </NavDropdown> */}
                                    </>
                                )}
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Navigation;