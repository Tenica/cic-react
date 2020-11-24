import React from 'react';

const FifthSection = () => {

  
    return ( <div>
        <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Our Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: "url('images/image_1.jpg')"}}>
              </a>
              <div className="text mt-3 text-center">
              	<div className="meta mb-2">
                  <div><a href="/">January 30, 2020</a></div>
                  <div><a href="/">Admin</a></div>
                  <div><a href="/" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
                <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20 rounded" style= {{backgroundImage: "url('images/image_2.jpg')"}}>
              </a>
              <div className="text mt-3 text-center">
              	<div className="meta mb-2">
                  <div><a href="/">January 30, 2020</a></div>
                  <div><a href="/">Admin</a></div>
                  <div><a href="/" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
                <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20 rounded" style= {{backgroundImage: "url('images/image_3.jpg')"}}>
              </a>
              <div className="text mt-3 text-center">
              	<div className="meta mb-2">
                  <div><a href="/">January 30, 2020</a></div>
                  <div><a href="/">Admin</a></div>
                  <div><a href="/" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
                <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div> );
}
 
export default FifthSection;