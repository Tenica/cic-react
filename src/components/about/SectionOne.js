import React from 'react';

const SectionOne = () => {
    return ( <div>
        <section className="hero-wrap hero-wrap-2" style= {{backgroundImage: "url('images/bg_3.jpg')"}} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>About us <i className="ion-ios-arrow-forward"></i></span></p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>
        
        </div> );
}
 
export default SectionOne;