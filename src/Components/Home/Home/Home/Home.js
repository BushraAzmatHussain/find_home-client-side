import React from 'react';
import About from '../../../About/About';
import Categories from '../../../Categories/Categories';
import FeaturedApertments from '../../../FeaturedApertments/FeaturedApertments';
import Footer from '../../../Footer/Footer';
import Review from '../../../Review/Review';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
            <FeaturedApertments></FeaturedApertments>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;