import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../img/undraw_Page_not_found_re_e9o6 (1).png'

const NotFound = () => {
    return (
        <div>
            <div>
                <img src={notfound} alt="" />
            </div>
            <div>
                <Link to="/">
                    <Button className="btn-primary">
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        Back To Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;