import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../../../hooks/useAuth';
import { Table } from "react-bootstrap";
import Swal from 'sweetalert2';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const { email } = user;

    useEffect(() => {
        fetch(`https://secret-reaches-41807.herokuapp.com/orders/${email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [email]);
    console.log(myOrders);


    //delete order
    const deleteId = (id) => {
        // const proceed = window.confirm("you want to sure to delete");
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://secret-reaches-41807.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount === 1) {
                            alert("Product deleted");
                            const restMyOrders = myOrders.filter((list) => list._id !== id);
                            setMyOrders(restMyOrders);
                        }
                    });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


        // if (proceed) {

        // }
    };

    return (
        <div className="pt-3">
            <h2>My All Order With Status</h2>
            <p className="fs-4">My All Orders:- {myOrders.length} </p>

            {/* my orders list */}
            <Table responsive="sm" className="my-5">
                <thead>
                    <tr>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">My Order Id </th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Order Cost</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Order Status</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Order Delete</th>
                        ))}
                    </tr>
                </thead>
                {myOrders.map((myOrder) => (
                    <tbody>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-normal fs-4 text-light" key={index}>
                                    {myOrder?._id}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-normal fs-4 text-light" key={index}>
                                    {myOrder?.price} $
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-normal fs-4 text-light" key={index}>
                                    {myOrder?.status}
                                </td>
                            ))}
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td key={index}>
                                    <button
                                        onClick={() => deleteId(myOrder._id)}
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

export default MyOrders;