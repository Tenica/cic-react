import React from 'react';


const Navbar = () => {
    return (   <div> <div className="container pt-5">
    <div className="row justify-content-between">
        <div className="col">
        <a className="navbar-brand" href="/" style= {{color:"#00043c"}}>Semper<span>'09</span></a>
        </div>
        <div className="col d-flex justify-content-end">
            <div className="social-media">
            <p className="mb-0 d-flex">
                <a href="/#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                <a href="/#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                <a href="/#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                <a href="/#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
            </p>
    </div>
        </div>
    </div>
</div>
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
<div className="container">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="fa fa-bars"></span> Menu
  </button>
        <form action="#" className="searchform order-lg-last">
  <div className="form-group d-flex">
    <input type="text" className="form-control pl-3" placeholder="Search" />
    <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
  </div>
</form>
  <div className="collapse navbar-collapse" id="ftco-nav">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
    <li className="nav-item"><a href="About" className="nav-link">About</a></li>
    <li className="nav-item"><a href="Executives" className="nav-link">Executives</a></li>
    <li className="nav-item"><a href="Constitution" className="nav-link">Constitution</a></li>
    <li className="nav-item"><a href="Blog" className="nav-link">Blog</a></li>
  <li className="nav-item active"><a href="Contact" className="nav-link">Contact</a></li>
    </ul>
  </div>
</div>
</nav> </div>   );
}
 
export default Navbar;