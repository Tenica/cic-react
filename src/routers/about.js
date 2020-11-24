import React from 'react';
import SectionOne from '../components/about/SectionOne';
import Navbar from '../components/about/Navbar';
import Footer from '../components/Footer';
import CicHistory from '../components/about/History';




const About = () => {
    return ( <div>
        <Navbar/>
        <SectionOne/>
        <CicHistory/>
        <Footer/>
        </div> );
}
 
export default About;