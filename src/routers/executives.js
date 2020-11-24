import React from 'react';
import Body from '../components/executives/body';
import Jumbotron from '../components/executives/Jumbotron';
import Navbar from '../components/executives/Navbar';
import Footer from '../components/Footer';


const Executives = () => {
    return ( <div>
        <Navbar/>
        <Jumbotron />
        <Body />
        <Footer/>
        </div> );
}
 
export default Executives;