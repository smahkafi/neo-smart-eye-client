import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import signupImg from '../../../img/Login/undraw_New_entries_re_cffr.png'
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

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
        <>
            <Navigation></Navigation>
            <Container>
                <div style={{ minHeight: "72vh" }} className="row">
                    <div className="col-sm-12 col-md-6 col-lg-5 align-self-center">
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
                                        Already Our Family? Hurry! UP Attend <span className="btn btn-dark">Here</span>
                                    </NavLink>
                                </p>

                                <p className="text-danger">{authError}</p>
                            </form>
                        }
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5 align-self-center">
                        <img className="img-fluid" src={signupImg} alt="" />
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Register;