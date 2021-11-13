import React, { useEffect, useState } from 'react';
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import { Table } from "react-bootstrap";


const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [orderConfirm, setOrderConfirm] = useState(true)



    useEffect(() => {
        fetch(`https://secret-reaches-41807.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [orderConfirm]);


    //delete order
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
                const url = `https://secret-reaches-41807.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            alert("Product deleted");
                            const restMyOrders = myOrders.filter((order) => order?._id !== id);
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
    };


    const confirmationOrder = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert here!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirmed it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://secret-reaches-41807.herokuapp.com/orders/${id}`
                fetch(url, {
                    method: "PUT",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount === 1) {
                            // alert("Your order confirmed");
                            setOrderConfirm(!orderConfirm);
                        }
                    });
                Swal.fire(
                    'Confirmed!',
                    'Your Order has been Confirmed.',
                    'success'
                )
            }
        })
    };



    return (
        <div>
            <h2>Admin Manage All Orders</h2>
            <p className="fs-4">Total Orders:- {myOrders.length} </p>

            {/* my orders list */}
            <Table responsive="sm" className="my-5">
                <thead>
                    <tr>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Order Placer Name</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal"> Order Id </th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Cost</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Status</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Delete</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="text-white fs-5 fw-normal">Confirm</th>
                        ))}
                    </tr>
                </thead>
                {myOrders.map((myOrder) => (
                    <tbody>
                        <tr>
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-normal fs-4 text-light" key={index}>
                                    {myOrder?.Name}
                                </td>
                            ))}

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
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td key={index}>
                                    <button onClick={() => confirmationOrder(myOrder?._id)} className="mx-3 text-success">
                                        <FontAwesomeIcon icon={faCheckCircle} />
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

export default ManageAllOrders;