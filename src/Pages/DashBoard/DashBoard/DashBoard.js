import React from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

const DashBoard = () => {
    return (
        <Container>
            <div className="row">
                <div style={{ height: "100vh" }} className="col-sm-12 col-md-6 col-lg-4 text-white bg-dark">
                    <h1>this is menu</h1>
                </div>
                <div style={{ height: "100vh" }} className="col-sm-12 col-md-6 col-lg-8 text-white bg-secondary">
                    <h2>this is colups</h2>
                </div>
            </div>
        </Container>
    );
};

export default DashBoard;