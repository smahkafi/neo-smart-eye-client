import React, { useEffect, useState } from 'react';
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        const proceed = window.confirm("you want to sure to delete");
        if (proceed) {
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
        }
    };


    const confirmationOrder = (id) => {
        const confirmOrder = window.confirm("Are you sure to confirm?");
        if (confirmOrder) {
            fetch(`https://secret-reaches-41807.herokuapp.com/orders/${id}`, {
                method: "PUT",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount === 1) {
                        alert("Your order confirmed");
                        setOrderConfirm(!confirmOrder);
                    }
                });
        }
    };



    return (
        <div>
            <h2>Admin Manage All Orders</h2>
            <p>Total Orders:- {myOrders.length} </p>

            {/* my orders list */}
            <Table responsive="sm" className="my-5">
                <thead>
                    <tr>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}>Order Placer Name</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}> Order Id </th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}>Cost</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}>Status</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}>Cancle</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}>Confirm</th>
                        ))}
                    </tr>
                </thead>
                {myOrders.map((myOrder) => (
                    <tbody>
                        <tr>
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold" key={index}>
                                    {myOrder?.Name}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold" key={index}>
                                    {myOrder?._id}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold" key={index}>
                                    {myOrder?.price} $
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold" key={index}>
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