import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { Table } from 'react-bootstrap';

const CheckReviews = () => {

    const [checkReviews, setCheckReviews] = useState([])

    useEffect(() => {
        fetch('https://secret-reaches-41807.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setCheckReviews(data))
    }, [checkReviews])

    //delete products
    const deleteId = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert here!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://secret-reaches-41807.herokuapp.com/review/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            const restCheckReviews = checkReviews.filter((checkReview) => checkReview?._id !== id);
                            setCheckReviews(restCheckReviews);
                        }
                    });
                Swal.fire(
                    'Deleted!',
                    'Review has been deleted.',
                    'success'
                )
            }
        })
    };

    return (
        <div>
            <h2>All users reviews manage</h2>
            <p>Total Reviews{checkReviews.length} </p>

            <Table responsive="sm" className="my-5">
                <thead>
                    <tr >

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Reviews Id</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Reviewers Name </th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Reviewers Comments </th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Reviewers Rating</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Delete Reviews</th>
                        ))}
                    </tr>
                </thead>

                {checkReviews.map((checkReview) => (
                    <tbody>
                        <tr>
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-info" key={index}>
                                    {checkReview?._id}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-light" key={index}>
                                    {checkReview?.name}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-info" key={index}>
                                    {checkReview?.comment}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-light" key={index}>
                                    {checkReview?.rating}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td key={index} className=" bg-info">
                                    <button
                                        onClick={() => deleteId(checkReview._id)}
                                        className="mx-3 text-danger"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default CheckReviews;