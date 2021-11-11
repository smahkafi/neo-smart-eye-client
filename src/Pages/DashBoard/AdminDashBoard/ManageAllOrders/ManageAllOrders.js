import React, { useEffect, useState } from 'react';
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";


const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [orderConfirm, setOrderConfirm] = useState(true)



    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [orderConfirm]);


    //delete order
    const deleteId = (id) => {
        const proceed = window.confirm("you want to sure to delete");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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


    const confirmID = (id) => {
        const confirm = window.confirm("wanna confirm ?");
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "PUT",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount === 1) {
                        alert("ordered confirmed");
                        setOrderConfirm(!confirm);
                    }
                });
        }
    };



    return (
        <div>
            <h2>this is Manage Orders</h2>
            <p>all orders {myOrders.length} </p>

            {/* my orders list */}
            <Table responsive="sm" className="my-5">
                <thead>
                    <tr>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}>myOrder Placer Name</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}> myOrder Id </th>
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
                                    <button onClick={() => confirmID(myOrder?._id)} className="mx-3 text-success">
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