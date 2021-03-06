import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginimg from '../../../img/Login/undraw_Login_re_4vu2.png';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {
    const { user, handleLogin, signInWithGoogle, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        handleLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = e => {
        signInWithGoogle(location, history);
        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <div style={{ minHeight: "72vh" }} className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <img className="img-fluid" src={loginimg} alt="" />
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <form
                            onSubmit={handleLoginSubmit}
                            className="pt-5">

                            <input onChange={handleOnChange} type="email" name="email" id="" placeholder="Email" className="border-bottom border-0 w-50 mb-5" />

                            <br />
                            <input onChange={handleOnChange} type="password" name="password" id="" placeholder="Password" className="border-bottom border-0 w-50 mb-5" />
                            <br />

                            <input style={{ backgroundColor: '#163336' }} className="w-25 btn btn-dark m-auto" type="submit" value="Login" />

                            <span className="mx-2">||</span>

                            <Button onClick={handleGoogleSignIn} type="submit" className="btn btn-dark text-light me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</Button>

                            <p className="text-center m-0 p-0 mt-3">
                                <NavLink className="text-decoration-none text-dark" to="/register">
                                    New Here? <br /> Quickly Be Our Family!<div className="btn btn-outline-dark text-warning ms-3">Click Here</div>
                                </NavLink>
                            </p>

                            <p className="text-danger">{authError}</p>

                        </form>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;