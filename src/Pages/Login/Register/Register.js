import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import signup from '../../../imges/login/signup.jpg';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, handleRegister, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not matched");
            return
        }
        handleRegister(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            {
                <form onSubmit={handleLoginSubmit}
                    className="pt-5">

                    <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="text" name="name" placeholder="Name" required />
                    <br /> <br />
                    <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="email" name="email" placeholder="Email" required />
                    <br /> <br />
                    <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                    <br /> <br />
                    <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="password" name="password2" placeholder="Re-type Password" required />
                    <br /> <br />

                    <input style={{ backgroundColor: '#163336' }} className="mt-5 w-50 btn btn-success m-auto" type="submit" value="Sign Up" />

                    <p className="text-center pt-3 mb-5">
                        <NavLink className="text-decoration-none text-success" to="/login">
                            Already Registered? Please Sign In!!
                        </NavLink>
                    </p>

                    <p className="text-danger">{authError}</p>
                </form>
            }
        </Container>
    );
};

export default Register;