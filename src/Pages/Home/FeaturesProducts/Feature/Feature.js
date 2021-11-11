import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Feature = (props) => {
    const { name, category, img, rating, price, _id } = props.feature;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 py-4 px-4 bg-info">
            <div className="bg-white py-2">
                <div>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{category}</p>
                    <Rating
                        readonly
                        style={{ color: "" }}
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                    />{" "}
                    <p>{rating}</p>
                    <p>{price}</p>
                </div>
                <Link to={`/orders/${_id}`}>
                    <Button>Buy Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Feature;