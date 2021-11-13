import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ListProducts from '../ListProducts/ListProducts';

const Products = () => {
    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <h2 className="mt-5">
                List Of <span className="text-secondary">Items</span>
            </h2>
            <ListProducts />
            <Footer></Footer>
        </div>
    );
};

export default Products;
