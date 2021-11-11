import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Orders = () => {
    const { id } = useParams();
    const { user } = useAuth()
    const [orders, setOrders] = useState({});
    useEffect(() => {
        fetch("http://localhost:5000/glasses")
            .then((res) => res.json())
            .then((data) => {
                const orders = data?.find((pack) => pack?._id === id);
                setOrders(orders);
                reset(orders);
            });
    }, [id]);

    console.log(orders)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.status = "pending";
        delete data._id;
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Your Order Is Placed");
                    reset();
                }
            });
    };

    return (
        <div>
            <Navigation></Navigation>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-5 p-2">
                    <div>
                        <div>
                            <img src={orders?.img} alt="eye glass" />
                        </div>
                        <div>
                            <h4>{orders?.name}</h4>
                            <p>{orders?.category}</p>
                            <p>{orders?.rating}</p>
                            <p>{orders?.price}</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-7 p-2">

                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-50 py-2 px-5" defaultValue={orders?._id} {...register("offer")} /> <br />

                        <input className="w-50 py-2 px-5" defaultValue={user.displayName} {...register("Name")} placeholder="name" /> <br />

                        <input className="w-50 py-2 px-5"
                            defaultValue={user.email}
                            {...register("email", { required: true })}
                            placeholder="email" /> <br />
                        {errors.email && (
                            <span className="error">This field is required</span>
                        )}
                        <input className="w-50 py-2 px-5"
                            placeholder="Address"
                            defaultValue=""
                            {...register("address")}
                        /> <br />
                        <input className="w-50 py-2 px-5" placeholder="City" defaultValue="" {...register("city")} /> <br />
                        <input className="w-50 py-2 px-5"
                            placeholder="phone number"
                            defaultValue=""
                            {...register("phone")}
                        /> <br />

                        <div className="btn btn-success">
                            <input className="bg-success border-0" type="submit" value="Place Order" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Orders;