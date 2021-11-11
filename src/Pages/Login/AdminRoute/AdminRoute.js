import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();
    if (loading) {
        return (
            <div className="text-center my-5 py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;


// import React from 'react';
// import { Redirect, Route } from 'react-router';
// import useAuth from '../../../hooks/useAuth';

// const AdminRoute = ({ children, ...rest }) => {
//     const { user, admin, } = useAuth();

//     return (
//         <Route>
//             {...rest}
//             render={({ location }) => user.email && admin ? (children)
//                 : (
//                     <Redirect to={{
//                         pathname: "/",
//                         state: { from: location }
//                     }}></Redirect>)}
//         </Route>
//     );
// };

// export default AdminRoute;
