import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [manageProducts, setManageProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/glasses')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [manageProducts])

    //delete products
    const deleteId = (id) => {
        const proceed = window.confirm(" Are you want to sure to delete");
        if (proceed) {
            const url = `http://localhost:5000/glasses/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Product deleted");
                        const restmanageProducts = manageProducts.filter((manageProduct) => manageProduct?._id !== id);
                        setManageProducts(restmanageProducts);
                    }
                });
        }
    };
    return (
        <div>
            <h2>Admin Manage All Products</h2>
            <p>Total Products:- {manageProducts.length} </p>

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



// {/* <div>

//             <h2>this is manage all products</h2>

//             {/* {
//                 manageProducts.map(manageProduct => console.log(manageProduct))
//             } */}
//         </div> */}