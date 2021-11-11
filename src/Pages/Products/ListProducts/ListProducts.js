import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Rating from 'react-rating';

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/glasses')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            < Container >
                <div div className="row" >
                    {
                        products.map(product =>
                            <div className="col-sm-12 col-md-6 col-lg-4 py-4 px-4 bg-info">
                                <div className="bg-white py-2">
                                    <div>
                                        <img className="img-fluid" src={product.img} alt="" />
                                    </div>
                                    <div>
                                        <h2>{product.name}</h2>
                                        <p>{product.category}</p>
                                        <p>{product.rating}</p>
                                        <Rating
                                            readonly
                                            style={{ color: "" }}
                                            initialRating={product.rating}
                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                        />{" "}
                                        <p>{product.price}</p>
                                    </div>
                                    <Button>Buy Now</Button>
                                </div>
                            </div>)
                    }
                </div>
            </Container >
        </div>
    );
};

export default ListProducts;