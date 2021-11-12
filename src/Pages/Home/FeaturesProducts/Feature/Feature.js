import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './Feature.css'

const Feature = (props) => {
    const { name, category, img, rating, price, _id, descriptions } = props.feature;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 py-4 px-4 bg-light">
            <div className="bg-feature py-2">
                <div class="card" >
                    <div>
                        <img style={{ minHeight: "199px", maxHeight: "200px" }} className="img-fluid" src={img} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{descriptions}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span >
                                <Rating
                                    readonly
                                    style={{ color: "" }}
                                    initialRating={rating}
                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                />{" "}
                            </span>
                            - <span >{rating}</span>
                        </li>
                        <li class="list-group-item">{category}</li>
                        <li class="list-group-item">{price} $</li>
                    </ul>
                    <div class="card-body d-flex justify-content-evenly">
                        <Link to={`/orders/${_id}`} class="card-link">
                            <Button className="bg-dark">Buy Now</Button>
                        </Link>
                        <Link to="/products" class="card-link">
                            <Button className="bg-dark">See More</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Feature;




