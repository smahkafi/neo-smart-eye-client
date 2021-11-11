import React from 'react';
import { Button } from 'react-bootstrap';

const Feature = (props) => {
    const { name, category, img, rating, price } = props.feature;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 py-4 px-4 bg-info">
            <div className="bg-white py-2">
                <div>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{category}</p>
                    <p>{rating}</p>
                    <p>{price}</p>
                </div>
                <Button>Buy Now</Button>
            </div>
        </div>
    );
};

export default Feature;