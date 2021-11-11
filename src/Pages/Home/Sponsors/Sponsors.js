import React from 'react';
import sp1 from '../../../img/sponsor/Client-01-hover.png'
import sp2 from '../../../img/sponsor/Client-02-hover-1.png'
import sp3 from '../../../img/sponsor/Client-03-hover-1.png'
import sp4 from '../../../img/sponsor/Client-04-hover-1.png'
import sp5 from '../../../img/sponsor/Client-05-hover-1.png'
import './Sponsors.css'

const Sponsors = () => {
    return (
        <div className="mt-5 for-bg">
            <div className="row py-5">
                <div className="col-sm-12 col-md-1 col-lg-1">
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <img className="img-fluid" src={sp1} alt="" />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <img className="img-fluid" src={sp2} alt="" />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <img className="img-fluid" src={sp3} alt="" />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <img className="img-fluid" src={sp4} alt="" />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <img className="img-fluid" src={sp5} alt="" />
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1">
                </div>
            </div>
        </div>
    );
};

export default Sponsors;