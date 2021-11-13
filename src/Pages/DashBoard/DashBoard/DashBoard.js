import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPlus, faShoppingCart, faStore, faTasks, faUserCog, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AddProducts from '../AdminDashBoard/AddProducts/AddProducts';
import CheckReviews from '../AdminDashBoard/CheckReviews/CheckReviews';
import MakeAdmin from '../AdminDashBoard/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../AdminDashBoard/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from '../AdminDashBoard/ManageAllProducts/ManageAllProducts';
import MyOrders from '../UserDashBoard/MyOrders/MyOrders';
import MyReview from '../UserDashBoard/MyReview/MyReview';
import Payment from '../UserDashBoard/Payment/Payment';
import './DashBoard.css'

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();
    return (
        <div className="dashbord-root">
            <Navigation></Navigation>
            <div className="container-fluid">
                <div className="row mb-2">
                    <div style={{ minHeight: "80vh" }} className="col-sm-12 col-md-6 col-lg-2 text-white pt-5 align-self-center">
                        {/* accordion */}
                        <div class="accordion  justify-space-between" id="accordionExample">
                            <div className="d-flex justify-content-between mt-4">
                                <div>
                                    <Link to="/">
                                        <FontAwesomeIcon className="fs-1 m-0 p-0 text-white mx-2" icon={faHome}></FontAwesomeIcon>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/products">
                                        <FontAwesomeIcon className="fs-1 m-0 p-0 text-white mx-2" icon={faStore}></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </div>
                            {
                                admin && <div class="accordion-item mt-3 admin-root">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <FontAwesomeIcon icon={faUserLock} className="me-2" />  Admin Panel
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">


                                            <Link className="text-decoration-none" to={`${url}/manageAllOrders`}>
                                                <li style={{ listStyle: 'none' }} className="mt-3 text-start text-dark ms-5 fs-5"> <FontAwesomeIcon icon={faTasks} /> Manage Orders</li>
                                            </Link>

                                            <Link className="text-decoration-none" to={`${url}/addProduct`}>
                                                <li style={{ listStyle: 'none' }} className="mt-3 text-start text-dark ms-5 fs-5"> <FontAwesomeIcon icon={faPlus} /> Add Product</li>
                                            </Link>

                                            <Link className="text-decoration-none" to={`${url}/makeAdmin`}>
                                                <li style={{ listStyle: 'none' }} className="mt-3 text-start text-dark ms-5 fs-5"> <FontAwesomeIcon icon={faUserLock} /> Make Admin</li>
                                            </Link>

                                            <Link className="text-decoration-none" to={`${url}/checkReviews`}>
                                                <li style={{ listStyle: 'none' }} className="mt-3 text-start text-dark ms-5 fs-5"> <FontAwesomeIcon icon={faSmileBeam} /> Check All Reviews</li>
                                            </Link>

                                            <Link className="text-decoration-none" to={`${url}/manageAllProducts`}>
                                                <li style={{ listStyle: 'none' }} className="mt-3 text-start text-dark ms-5 fs-5"> <FontAwesomeIcon icon={faTasks} /> Manage All Products</li>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button bg-dark text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <FontAwesomeIcon icon={faUserCog} className="me-2 " />  User Panel
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse bg-dark" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Link className="text-decoration-none" to={`${url}`}>
                                            <li className="text-start fs-5 text-light mt-3" style={{ listStyle: 'none' }}> <FontAwesomeIcon className="fs-4 " icon={faShoppingCart}></FontAwesomeIcon><span className="ms-2"> My Order</span></li>
                                        </Link>

                                        <Link className="text-decoration-none" to={`${url}/payment`}>
                                            <li className="text-start fs-5 text-light mt-3" style={{ listStyle: 'none' }}> <FontAwesomeIcon className="fs-4 " icon={faPaypal}></FontAwesomeIcon><span className="ms-3"> Payment </span></li>
                                        </Link>

                                        <Link className="text-decoration-none" to={`${url}/review`}>
                                            <li className="text-start fs-5 text-light mt-3" style={{ listStyle: 'none' }}><FontAwesomeIcon className="fs-4 " icon={faSmileBeam}></FontAwesomeIcon><span className="ms-3">Post A Review</span></li>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* accordion */}
                    </div>
                    <div style={{ minHeight: "80vh", backgroundColor: "" }} className="bg-order-list col-sm-12 col-md-6 col-lg-10 pt-5 text-white ">
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
                            <AdminRoute path={`${path}/checkReviews`}>
                                <CheckReviews />
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageAllProducts`}>
                                <ManageAllProducts />
                            </AdminRoute>
                            <AdminRoute path={`${path}/checkReviews`}>
                                <CheckReviews />
                            </AdminRoute>
                        </Switch>
                    </div>
                </div >
            </div>
            <Footer></Footer>
        </div >
    );
};

export default DashBoard;