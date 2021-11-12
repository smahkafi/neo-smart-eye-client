import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

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
                    alert("Your new product is inserted");
                    reset();
                }
                else {
                    errors()
                }
            });
    };

    return (
        <div>
            <div
                className="col-sm-12 col-md-6 col-lg-6 mx-auto my-5 border p-0 rounded"
                style={{ width: "16rem" }}
            >
                <h2>Add A New Tours</h2>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name")}
                        placeholder="Product Name"
                        className="py-1 px-2 my-2 w-50"
                    />
                    <input
                        {...register("category")}
                        placeholder="Category Name"
                        className="py-1 px-2 my-2 w-50"
                    />
                    <input
                        {...register("price")}
                        placeholder="Product Price"
                        className="py-1 px-2 my-2 w-50"
                    />
                    <input
                        {...register("rating")}
                        placeholder="Product ratting min 1 to 5"
                        className="py-1 px-2 my-2 w-50"
                    />
                    <input
                        {...register("img")}
                        placeholder="Product img link"
                        className="py-1 px-2 my-2 w-50"
                    />
                    <div className="btn btn-success">
                        <input type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;