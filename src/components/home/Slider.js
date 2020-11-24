import React from 'react';

const Slider = () => {
    return (<div>    
        <div className="hero-wrap">
	    <div className="home-slider owl-carousel">
	      <div className="slider-item img-fluid" style= {{backgroundImage: "url(images/cic-pix5.jpg)"}}>
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-12 ftco-animate">
		          	<div className="text w-100 text-center">
		          		<h2>Welcome to the official page of</h2>
			            <h1 className="mb-3">C.I.C '09 SET</h1>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>

	      <div className="slider-item img-fluid" style= {{backgroundImage: "url(images/cic-pix4.jpg)"}}>
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-12 ftco-animate">
		          	<div className="text w-100 text-center">
		          		<h2>Semper Fidelis</h2>
			            <h1 className="mb-3">Always be Faithful</h1>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>
</div>
</div>
	      
		          
		
	        
	      
	    
	  
        
        </div>  );
}
 
export default Slider;