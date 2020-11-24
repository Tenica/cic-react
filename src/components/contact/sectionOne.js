import React from 'react';
import RegisterationForm from './registerationForm'

const SectionOne = () => {

    
    return ( <div>
        <section className="hero-wrap hero-wrap-2" style={{backgroundImage: "url('images/bg_3.jpg')"}} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Contact <i className="ion-ios-arrow-forward"></i></span></p>
              <h1 className="mb-0 bread">Contact us</h1>
            </div>
          </div>
        </div>
      </section>
         
      <section className="ftco-section">
          <div className="container">
              <div className="row justify-content-center">
                      <div className="col-md-12">
                          <div className="wrapper">
                              <div className="row no-gutters mb-5">
                                  <div className="col-md-7">
                                      <div className="contact-wrap w-100 p-md-5 p-4">
                                      <h3 className="mb-4">Contact Us</h3>
                                      <div id="form-message-warning" className="mb-4"></div> 
                                <div id="form-message-success" className="mb-4">
                              Fill the form to contact us.
                                </div>
                                      <RegisterationForm />
                                      
                                  </div>
                              </div>
                                  <div className="col-md-5 d-flex align-items-stretch">
                                      <div id="map">
                            </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-3">
                                      <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                      <span className="fa fa-map-marker"></span>
                                  </div>
                                  <div className="text">
                                  <p><span>Address:</span> 307 Amaigbo Lane,Uwani,Enugu.</p>
                                </div>
                            </div>
    
                                  </div>
                                  <div className="col-md-3">
                                      <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                      <span className="fa fa-phone"></span>
                                  </div>
                                  <div className="text">
                                  <p><span>Phone:</span> <a href="tel://1234567920">+234 706 749 5549</a></p>
                                </div>
                            </div>
                                  </div>
                                  <div className="col-md-3">
                                      <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                      <span className="fa fa-paper-plane"></span>
                                  </div>
                                  <div className="text">
                                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">hello@cic09.com</a></p>
                                </div>
                            </div>
                                  </div>
                                  <div className="col-md-3">
                                      <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                      <span className="fa fa-globe"></span>
                                  </div>
                                  <div className="text">
                                  <p><span>Website</span> <a href="/">www.cic09.com</a></p>
                                </div>
                            </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
          </div>
      </section>
  
        
        </div> );
}
 
export default SectionOne;