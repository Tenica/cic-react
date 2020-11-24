import React from 'react';



const Jumbotron = () => {

    const JumboStyle = {
        backgroundImage:  "url('/images/bg_3.jpg')",
        dataStellarBackgroundRatio: "0.5"
    };
    
    return ( <div>
        <section className="hero-wrap hero-wrap-2" style={JumboStyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Projects <i className="ion-ios-arrow-forward"></i></span></p>
              <h1 className="mb-0 bread">CONSTITUTION</h1>
            </div>
          </div>
        </div>
      </section>
        
        
        </div> );
}
 
export default Jumbotron;