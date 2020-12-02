import React from 'react';
import moment from 'moment'

const Footer = () => {
 

    return (     <footer className ="footer">
    <div className ="container-fluid px-lg-5">
        <div className ="row">
            <div className ="col-md-9 py-5">
                <div className ="row">
                    <div className ="col-md-4 mb-md-0 mb-4">
                    
                        <h2 className ="footer-heading">About us</h2>
                        <img style={{width:"50px"}} src={"images/cicsize.png"} alt=""/>
                        <p>The idea of the old boys association was conceived when it was considered
                        necessary to create an organization that would keep us together after school.</p>
                        <ul className ="ftco-footer-social p-0">
              <li className ="ftco-animate"><a href="/" data-toggle="tooltip" data-placement="top" title="Twitter"><span className ="ion-logo-twitter"></span></a></li>
              <li className ="ftco-animate"><a href="/" data-toggle="tooltip" data-placement="top" title="Facebook"><span className ="ion-logo-facebook"></span></a></li>
              <li className ="ftco-animate"><a href="/" data-toggle="tooltip" data-placement="top" title="Instagram"><span className ="ion-logo-instagram"></span></a></li>
            </ul>
                    </div>
                    <div className ="col-md-8">
                        <div className ="row justify-content-center">
                            <div className ="col-md-12 col-lg-10">
                                <div className ="row">
                                    <div className ="col-md-4 mb-md-0 mb-4">
                                        <h2 className ="footer-heading">Services</h2>
                                        <ul className ="list-unstyled">
                              <li><a href="/" className ="py-1 d-block">Construction</a></li>
                              <li><a href="/" className ="py-1 d-block">House Renovation</a></li>
                              <li><a href="/" className ="py-1 d-block">Painting</a></li>
                              <li><a href="/" className ="py-1 d-block">Arcictecture Design</a></li>
                            </ul>
                                    </div>
                                    <div className ="col-md-4 mb-md-0 mb-4">
                                        <h2 className ="footer-heading">About</h2>
                                        <ul className ="list-unstyled">
                              <li><a href="/" className ="py-1 d-block">Staff</a></li>
                              <li><a href="/" className ="py-1 d-block">Team</a></li>
                              <li><a href="/" className ="py-1 d-block">Careers</a></li>
                              <li><a href="/" className ="py-1 d-block">Blog</a></li>
                            </ul>
                                    </div>
                                    <div className ="col-md-4 mb-md-0 mb-4">
                                        <h2 className ="footer-heading">Resources</h2>
                                        <ul className ="list-unstyled">
                              <li><a href="/" className ="py-1 d-block">Security</a></li>
                              <li><a href="/" className ="py-1 d-block">Global</a></li>
                              <li><a href="/" className ="py-1 d-block">Charts</a></li>
                              <li><a href="/" className ="py-1 d-block">Privacy</a></li>
                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-md-5">
							<div class="col-md-12">
								<p class="copyright">
					  Copyright {moment().format('MMMM YYYY')}.All rights reserved | <strong>Tenica-Technology</strong>.
					 </p>
							</div>
						</div>
						</div>
					</div>
           
               
        </div>
    
    
</footer> );
}
 
export default Footer;