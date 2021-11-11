import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Feature from './Feature/Feature';

const FeaturesProducts = () => {
    const [featurs, setfeaturs] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/glasses')
            .then(res => res.json())
            .then(data => setfeaturs(data))
    }, [])
    return (
        <Container>
            <h2 className="py-2">BROWSE OUR PRODUCTS</h2>
            <p className="py-2">Explore our new summer collection</p>

            <div className="row">
                {
                    featurs.slice(0, 6).map(feature => <Feature key={feature._id} feature={feature}                    >

                    </Feature>)
                }
                <Link to="/products">
                    <Button className="btn btn-primary">Explore More</Button>
                </Link>
            </div>


        </Container >
    );
};

export default FeaturesProducts;