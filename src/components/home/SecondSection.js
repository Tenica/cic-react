import React from 'react';
import './ulStyles.css'
const SecondSection = () => {
    return ( <div>
        <section className="ftco-section ftco-no-pt ftco-no-pb">
    	<div className="container">
    		<div className="row d-flex no-gutters">
    			<div className="col-md-6 d-flex">
    				<div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end" style= {{backgroundImage:"url(images/cic-biglogo.jpg)"}}>
    					<a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
    						<span className="icon-play"></span>
    					</a>
    				</div>
    			</div>
    			<div className="col-md-6 pl-md-5">
    				<div className="row justify-content-start py-5">
		          <div className="col-md-12 heading-section ftco-animate pl-md-4 py-md-4">
		          	<span className="subheading">Welcome to C.I.C 2009 class.</span>
		            <h2 className="mb-4">We create and turn into reality</h2>
		            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
		            <div className="tabulation-2 mt-4">
									<ul className="nav nav-pills nav-fill d-md-flex d-block">
									  <li className="nav-item mb-md-0 mb-2">
									    <a className="nav-link py-2" data-toggle="tab" href="#home1">Our Mission</a>
									  </li>
									  <li className="nav-item px-lg-2 mb-md-0 mb-2">
									    <a className="nav-link active  py-2" data-toggle="tab" href="#home2">Our Vision</a>
									  </li>
									  <li className="nav-item">
									    <a className="nav-link py-2 mb-md-0 mb-2" data-toggle="tab" href="#home3">Our Value</a>
									  </li>
									</ul>
									<div className="tab-content bg-light rounded mt-2">
									  <div className="tab-pane container p-0 fade" id="home1">
									  <ul className="a">
									  <li className="b"> To foster a sense of unity among the members of the 2009 class by
									  bringing the vast human resources, talents and capabilities in our class into a
									  social circle that takes care of the wellbeing of the society in a bid to make
									  from each other a truly satisfied and successful person.</li>
									  <li className="c">College of the Immaculate Conception having instilled in us the traits
									  of dedication, selfless service, hard work and patriotism, this association will
									  ensure that such values are being harnessed and transferred to the larger
									  society.</li>
									  <li className="d"> To support, promote and nurture the younger generations in our alma
									  mater by contributing our quota to ensure that the standard of education is 
									  the best by embarking on projects and objects which are reasonably
									  incidental to this noble ideal.</li>
									  </ul> 
									 


									  </div>
									  <div className="tab-pane container p-0 active" id="home2">
									  <p>This is a leading association that will reflect the desires of the members to be
										  united under one umbrella for the all round development of ourselves and the
										  betterment of the society.</p>
									  </div>
									  <div className="tab-pane container p-0 fade" id="home3">
									  	<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
 
export default SecondSection;


