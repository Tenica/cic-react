import React from 'react';
import Jumbotron from '../components/constitution/jumbotron';
import Body from '../components/constitution/body';
import Navbar from '../components/constitution/Navbar';
import Footer from '../components/Footer';

const Constitution = () => {
    return ( 
        <div>
        <Navbar/>
         <Jumbotron/>
         <Body/>
         <Footer/>
        </div>
        );
}
 
export default Constitution;