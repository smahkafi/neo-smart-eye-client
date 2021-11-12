import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const CheckReviews = () => {

    const [checkReviews, setCheckReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setCheckReviews(data))
    }, [checkReviews])

    //delete products
    const deleteId = (id) => {
        const proceed = window.confirm(" Are you want to sure to delete");
        if (proceed) {
            const url = `http://localhost:5000/review/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Review deleted");
                        const restCheckReviews = checkReviews.filter((checkReview) => checkReview?._id !== id);
                        setCheckReviews(restCheckReviews);
                    }
                });
        }
    };

    return (
        <div>
            <h2>this is reviews checking page</h2>
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