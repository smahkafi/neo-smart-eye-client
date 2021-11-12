import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import ListProduct from '../ListProduct/ListProduct';

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secret-reaches-41807.herokuapp.com/glasses')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            < Container >
                <div div className="row" >
                    {
                        products.map(product => <ListProduct
                            key={product._id}
                            product={product}
                        >

                        </ListProduct>
                        )
                    }
                </div>
            </Container >
        </div>
    );
};

export default ListProducts;