import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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