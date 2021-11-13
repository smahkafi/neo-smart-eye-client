import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import addProductsImg from '../../../../img/DashBoard/product_teardown_elol.png'
import Swal from 'sweetalert2';

const AddProducts = () => {
    const { user } = useAuth()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // add new glass
    const onSubmit = (data) => {
        data.email = user?.email
        fetch("https://secret-reaches-41807.herokuapp.com/glasses", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire('Wow! Your New Product Inserted')
                    reset();
                }
                else {
                    errors()
                }
            });
    };

    return (
        <div>
            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto my-5 border p-0 rounded">
                    <img className="img-fluid" src={addProductsImg} alt="" />
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto my-5 border p-0 rounded">
                    <h2>Add A New Glass</h2>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            placeholder="Product Name"
                            className="p-2 m-2 w-50 text-center"
                        />
                        <input
                            {...register("category")}
                            placeholder="Category Name"
                            className="p-2 m-2 w-50 text-center"
                        />
                        <input
                            {...register("price")}
                            placeholder="Product Price"
                            className="p-2 m-2 w-50 text-center"
                        />
                        <input
                            {...register("rating")}
                            placeholder="Product ratting min 1 to 5"
                            className="p-2 m-2 w-50 text-center"
                        />
                        <input
                            {...register("img")}
                            placeholder="Product img link"
                            className="p-2 m-2 w-50 text-center"
                        />
                        <textarea
                            {...register("descriptions")}
                            rows="5"
                            cols="100"
                            placeholder="Give a products descriptions"
                            className="p-2 m-2 w-50 text-center"
                            maxLength="75"
                        />
                        <br />
                        <input
                            type="submit"
                            value="Add Now"
                            className="fw-bold text-muted p-2 m-2 w-25 btn btn-light btn-outline-warning"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;