import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ListProducts from '../ListProducts/ListProducts';

const Products = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ListProducts />
            <Footer></Footer>
        </div>
    );
};

export default Products;
