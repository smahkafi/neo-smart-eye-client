import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';


const MyReview = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('review added successfully')
                    reset()
                }
            });
    }
    return (
        <div>
            <h1 className="text-center">Give A Review</h1>
            <div className="data-form my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input

                        className="p-2 m-2 w-25 text-center"
                        defaultValue={user?.displayName}
                        {...register("name")}
                        required

                    />
                    {/* Rating */}
                    <input
                        {...register("rating")}
                        placeholder="Give your rating"
                        className="p-2 m-2 w-25 text-center "
                        required
                    />
                    <br />

                    {/* description  */}
                    <textarea
                        {...register("comment")}
                        rows="5"
                        cols="100"
                        placeholder="Write a short note"
                        className="p-4 my-2 mx-auto w-50"
                        required
                    />
                    <br />

                    <input
                        type="submit"
                        value="SEND"
                        className="fw-bold text-muted p-2 m-2 w-25 btn btn-light btn-outline-warning"
                    />
                </form>
            </div>
        </div>
    )
}

export default MyReview;