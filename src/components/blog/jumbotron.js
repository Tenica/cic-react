import React from 'react';



const Jumbotron = () => {

    const JumboStyle = {
        backgroundColor:  "rgb(204, 255, 255)",
        
    };
    
   
    
    

    return ( <div className="container-fluid" style={JumboStyle} >
        <div >
        <h1 style={{paddingTop:"20%", paddingBottom:"20%", fontWeight:"800", color: "#00111a",textAlign:"center"}}>COMING <span style={{color:"#fdbe34"}}>SOON!!</span></h1>
        </div>
        
        
        </div> );
}
 
export default Jumbotron;