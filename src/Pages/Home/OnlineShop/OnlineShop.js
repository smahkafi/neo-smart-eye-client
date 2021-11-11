import React from 'react';
import { Container } from 'react-bootstrap';
import delivery from '../../../img/online-shop-icon/main-home-icon-02.webp'
import shopping from '../../../img/online-shop-icon/mainhome-icon-01.webp'
import helpdesk from '../../../img/online-shop-icon/sluske.webp'

const OnlineShop = () => {
    return (
        <Container className="mt-5 py-5">
            <h2>ONLINE SHOP SERVICES</h2>
            <p>Our entire offer is only just one click away</p>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 p-3">
                    <div>
                        <img src={delivery} alt="" />
                    </div>
                    <div>
                        <h5 className="text-uppercase">free shipping</h5>
                        <p>Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae orci sit</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-3">
                    <div>
                        <img src={shopping} alt="" />
                    </div>
                    <div>
                        <h5 className="text-uppercase">100% SAFE ONLINE SHOPING</h5>
                        <p>Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae orci sit</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-3">
                    <div>
                        <img src={helpdesk} alt="" />
                    </div>
                    <div>
                        <h5 className="text-uppercase">HELPDESK CENTER</h5>
                        <p>Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae orci sit</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OnlineShop;