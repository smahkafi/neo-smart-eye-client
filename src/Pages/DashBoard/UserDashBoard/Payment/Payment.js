import React from 'react';
import payment from "../../../../img/DashBoard/coming_soon.jpg"

const Payment = () => {
    return (
        <div>
            <img style={{ maxHeight: "50vh" }} className="img-fluid" src={payment} alt="" />
        </div>
    );
};

export default Payment;