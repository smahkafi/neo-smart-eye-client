import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../../../hooks/useAuth';
import { Table } from "react-bootstrap";
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const { email } = user;

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [email]);
    console.log(myOrders);


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
                    if (data.deletedCount === 1) {
                        alert("Product deleted");
                        const restMyOrders = myOrders.filter((list) => list._id !== id);
                        setMyOrders(restMyOrders);
                    }
                });
        }
    };

    return (
        <div className="pt-3">
            <h2>My All Order With Status</h2>
            <p>My All Orders:- {myOrders.length} </p>

            {/* my orders list */}
            <Table responsive="sm" className="my-5">
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                {myOrders.map((myOrder) => (
                    <tbody>
                        <tr>

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
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;