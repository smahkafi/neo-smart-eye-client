import React from 'react';
import left from '../../../img/Fashion/left.jpg'
import right from '../../../img/Fashion/right.jpg'
import './Fashion.css'

const Fashion = () => {
    return (
        <div className="container fash-mt">
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <img className="img-size1" src={left} alt="" />
                    <h2 className="text-secondary">10 YEARS OF VISION</h2>
                    <p className="text-secondary">REMINISCE WITH US</p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <img className="img-size2" src={right} alt="" />
                    <h2 className="text-secondary">FIND THE BEST FIT FOR YOUR FACE</h2>
                    <p className="text-secondary">TAKE ME TO THE GUIDE</p>
                </div>
            </div>
        </div>
    );
};

export default Fashion;