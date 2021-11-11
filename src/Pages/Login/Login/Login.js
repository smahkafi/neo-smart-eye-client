// import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginimg from '../../../img/Login/undraw_Login_re_4vu2.png';
import Footer from '../../Shared/Footer/Footer';


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
        <Container>
            <form
                onSubmit={handleLoginSubmit}
                className="pt-5">

                <input onChange={handleOnChange} type="email" name="email" id="" placeholder="Email" className="border-bottom border-0 w-50" />
                <br /> <br />
                <input onChange={handleOnChange} type="password" name="password" id="" placeholder="Password" className="border-bottom border-0 w-50" />
                <br /> <br />

                <input style={{ backgroundColor: '#163336' }} className="mt-5 w-50 btn btn-success m-auto" type="submit" value="Sign In" />

                <p className="text-center pt-3 mb-5">
                    <NavLink className="text-decoration-none text-success" to="/register">
                        New User? Please Register!!
                    </NavLink>
                </p>

                <p className="text-danger">{authError}</p>

                <p>-------or---------</p>

                <button onClick={handleGoogleSignIn} type="submit" className="btn btn-success me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
            </form>
        </Container>
    );
};

export default Login;