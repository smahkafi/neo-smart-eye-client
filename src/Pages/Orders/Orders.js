import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Orders = () => {
    const { id } = useParams();
    const { user } = useAuth()
    const [orders, setOrders] = useState({});
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        fetch("https://secret-reaches-41807.herokuapp.com/glasses")
            .then((res) => res.json())
            .then((data) => {
                const orders = data?.find((order) => order?._id === id);
                setOrders(orders);
                reset(orders);
            });
    }, [id]);

    // handle order submit
    const onSubmit = (data) => {
        data.status = "pending";
        delete data._id;
        fetch("https://secret-reaches-41807.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire('Thanks! Your Order Placed')
                    reset();
                }
            });
    };

    return (
        <div>
            <Navigation></Navigation>
            <Container style={{ minHeight: "75vh" }}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-5 p-2 align-self-center">
                        <div className="bg-feature py-2">
                            <div class="card" >
                                <div>
                                    <img style={{ minHeight: "199px", maxHeight: "200px" }} className="img-fluid" src={orders?.img} alt="" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{orders?.name}</h5>
                                    <p class="card-text">{orders?.descriptions}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <span >
                                            <Rating
                                                readonly
                                                style={{ color: "" }}
                                                initialRating={orders?.rating}
                                                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                            />{" "}
                                        </span>
                                        - <span >{orders?.rating}</span>
                                    </li>
                                    <li class="list-group-item">{orders?.category}</li>
                                    <li class="list-group-item">{orders?.price} $</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-7 p-2">

                        {<form className="p-5 bg-light" onSubmit={handleSubmit(onSubmit)}>
                            <div style={{ backgroundColor: "#E8F6F3" }} className="p-5">
                                <input className="w-50 rounded mt-2 py-2 px-5" defaultValue={orders?._id} {...register("offer")} /> <br />

                                <input className="w-50 rounded mt-2 py-2 px-5" defaultValue={user?.displayName} {...register("Name")} placeholder="name" /> <br />

                                <input className="w-50 rounded mt-2 py-2 px-5"
                                    defaultValue={user.email}
                                    {...register("email", { required: true })}
                                    placeholder="email" /> <br />
                                {errors.email && (
                                    <span className="error">This field is required</span>
                                )}
                                <input className="w-50 rounded mt-2 py-2 px-5"
                                    placeholder="Address"
                                    defaultValue=""
                                    {...register("address")}
                                /> <br />
                                <input className="w-50 rounded mt-2 py-2 px-5" placeholder="City" defaultValue="" {...register("city")} /> <br />
                                <input className="w-50 rounded mt-2 py-2 px-5"
                                    placeholder="phone number"
                                    maxLength="11"
                                    {...register("phone")}
                                /> <br />

                                <div className="btn btn-dark mt-3 w-50">
                                    <input className="bg-dark text-white fs-4 fw-light border-0"
                                        type="submit" value="Place Order" />
                                </div>
                            </div>
                        </form>}
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Orders;