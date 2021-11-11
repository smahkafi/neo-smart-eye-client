import React from 'react';
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Navigation from '../../Shared/Navigation/Navigation';
import AddProducts from '../AdminDashBoard/AddProducts/AddProducts';
import MakeAdmin from '../AdminDashBoard/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../AdminDashBoard/ManageAllOrders/ManageAllOrders';
import MyOrders from '../UserDashBoard/MyOrders/MyOrders';
import MyReview from '../UserDashBoard/MyReview/MyReview';
import Payment from '../UserDashBoard/Payment/Payment';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();
    return (
        <div className="container-fluid">
            <Navigation></Navigation>
            <div className="row">
                <div style={{ height: "100vh" }} className="col-sm-12 col-md-6 col-lg-3 text-white bg-dark">
                    {/* accordion */}
                    <div class="accordion" id="accordionExample">
                        {
                            admin && <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Admin Panel
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">


                                        <Link className="text-decoration-none" to={`${url}/manageAllOrders`}>
                                            <li>Manage Orders</li>
                                        </Link>

                                        <Link className="text-decoration-none" to={`${url}/addProduct`}>
                                            <li>Add Product</li>
                                        </Link>

                                        <Link className="text-decoration-none" to={`${url}/makeAdmin`}>
                                            <li>Make Admin</li>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        }
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    User Panel
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <Link className="text-decoration-none" to={`${url}`}>
                                        <li> My Order</li>
                                    </Link>

                                    <Link className="text-decoration-none" to={`${url}/payment`}>
                                        <li>Payment</li>
                                    </Link>

                                    <Link className="text-decoration-none" to={`${url}/review`}>
                                        <li>Review</li>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* accordion */}
                </div>
                <div style={{ height: "100vh" }} className="col-sm-12 col-md-6 col-lg-9 text-white bg-secondary">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders />
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment />
                        </Route>
                        <Route path={`${path}/review`}>
                            <MyReview />
                        </Route>

                        {/* admin section */}
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders />
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProducts />
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </AdminRoute>



                    </Switch>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;




{/* <Switch>
    <Route exact path={path}>
        <DashBoardHome></DashBoardHome>
    </Route>
    <AdminRoute path={`${path}/makeAdmin`}>
        <MakeAdmin></MakeAdmin>
    </AdminRoute>
    <AdminRoute path={`${path}/addDoctor`}>
        <AddDoctor></AddDoctor>
    </AdminRoute>
</Switch> */}