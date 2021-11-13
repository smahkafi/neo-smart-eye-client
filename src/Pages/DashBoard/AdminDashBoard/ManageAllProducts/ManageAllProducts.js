import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Table } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [manageProducts, setManageProducts] = useState([])

    useEffect(() => {
        fetch('https://secret-reaches-41807.herokuapp.com/glasses')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [manageProducts])

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
                const url = `https://secret-reaches-41807.herokuapp.com/glasses/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            const restmanageProducts = manageProducts.filter((manageProduct) => manageProduct?._id !== id);
                            setManageProducts(restmanageProducts);
                        }
                    });
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
            }
        })
    };
    return (
        <div>
            <h2>Admin Manage All Products</h2>
            <p className="fs-4">Total Products:- {manageProducts.length} </p>
            {/* my orders list */}
            <Table responsive="sm" className="my-5">
                <thead>
                    <tr >
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Product Name</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Product Id </th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3"> Product Category </th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3">Product Price</th>
                        ))}

                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index} className="bg-warning border border-3">Delete Product</th>
                        ))}
                    </tr>
                </thead>

                {manageProducts.map((manageProduct) => (
                    <tbody>
                        <tr>
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-info" key={index}>
                                    {manageProduct?.name}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-light" key={index}>
                                    {manageProduct?._id}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-info" key={index}>
                                    {manageProduct?.category}
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td className="fw-bold bg-light" key={index}>
                                    {manageProduct?.price} $
                                </td>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <td key={index} className=" bg-info">
                                    <button
                                        onClick={() => deleteId(manageProduct._id)}
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
        </div >
    );
};

export default ManageAllProducts;