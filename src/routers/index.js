import React from 'react';
import FifthSection from '../components/home/FifthSection';
import FirstSection from '../components/home/FirstSection';
import Footer from '../components/Footer';
import Navbar from '../components/home/Navbar';
import SecondSection from '../components/home/SecondSection';
import Slider from '../components/home/Slider';

const Home = () => {
    return ( <div>
        <Navbar/>
        <Slider />
        <FirstSection/>
        <SecondSection/>
        <FifthSection/>
        <Footer/>
        </div> );
}
 
export default Home;