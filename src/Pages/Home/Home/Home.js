import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturesProducts from '../FeaturesProducts/FeaturesProducts';
import HomeBanner from '../HomeBanner/HomeBanner';
import Instagram from '../Instagram/Instagram';
import OnlineShop from '../OnlineShop/OnlineShop';
import ReviewsShow from '../ReviewsShow/ReviewsShow';
import Sponsors from '../Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <FeaturesProducts></FeaturesProducts>
            <OnlineShop></OnlineShop>
            <Instagram></Instagram>
            <ReviewsShow></ReviewsShow>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    );
};

export default Home;