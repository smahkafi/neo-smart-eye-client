import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React from 'react';
import Rating from 'react-rating';

const ReviewShow = (props) => {
    const { name, rating, comment } = props.review
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="p-3 bg-light rounded">
                <p className="d-flex justify-content-evenly">

                    <span>
                        <FontAwesomeIcon className="me-2" icon={faUser}></FontAwesomeIcon>
                        {name}
                    </span>
                    <span>
                        <span >
                            <Rating
                                readonly
                                style={{ color: "" }}
                                initialRating={rating}
                                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                            />{" "}
                        </span>
                        - <span >
                            {rating}
                        </span>
                    </span>
                </p>
                <p className="text-start">{comment}</p>
            </div>
        </div>
    );
};

export default ReviewShow;