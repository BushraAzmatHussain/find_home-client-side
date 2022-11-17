import React from 'react';
import About from '../../../About/About';
import Categories from '../../../Categories/Categories';
import FeaturedApertments from '../../../FeaturedApertments/FeaturedApertments';
import Footer from '../../../Footer/Footer';
import Review from '../../../Review/Review';
import Banner from '../Banner/Banner';
import ChooseUs from '../../../ChooseUs/ChooseUs';
import Video from '../../../Video/Video';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ChooseUs></ChooseUs>
            <Video></Video>
            <Categories></Categories>
            <FeaturedApertments></FeaturedApertments>
            <Review></Review>
        </div>
    );
};

export default Home;
