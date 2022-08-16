import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-off-white footer">
            <div className="footer-shapes">
                <div className="footer-shape">
                    <img src="images/index/shape-1.png" alt="shape"/>
                </div>
                <div className="footer-shape footer-round-shape">
                    <img src="images/index/shape-2.png" alt="shape"/>
                </div>
            </div>

            <div className="footer-upper pt-100 pb-80 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-content-item">
                                <div className="footer-logo">
                                    <Link className="d-flex align-items-center justify-content-start"
                                          to="/" onClick={() => {window.location.href="/"}}>
                                        <img src="images/index/idea.png" alt="logo" className="logo" width="40"/>
                                        <img src="images/index/text-logo.png" alt="logo" className="logo logo-image"/>
                                    </Link>
                                </div>
                                <div className="footer-details">
                                    <p>
                                        Grow smarter, grow faster as we need solutions at the right place and at Smarttrak we are empowering all the needs.
                                    </p>
                                    <ul className="social-list social-list-btn">
                                        <li>
                                            <Link to={{pathname: "https://www.facebook.com/SmarttrakSolarSystems/"}} target="_blank" name="facebook"><i className="mdi mdi-facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link to={{pathname: "https://www.youtube.com/results?search_query=smarttrak+solar"}} target="_blank" name="youtube"><i className="mdi mdi-youtube"></i></Link>
                                        </li>
                                        <li>
                                            <Link to={{pathname: "https://in.linkedin.com/company/smarttrak-solar-systems-private-limited"}} target="_blank" name="linkedin"><i className="mdi mdi-linkedin"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul className="footer-details footer-list">
                                    <li>
                                        <Link to="/aboutus">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/career">Career</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/solutions">Solutions</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="footer-details footer-address">
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Phone:</h4>
                                            <p>
                                                <Link to={{pathname: "tel:001-987-654-432"}} target="_blank">(+1) 510-945-8169</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Email:</h4>
                                            <p>
                                                <Link to={{pathname: "mailto:info@erudex.com"}} target="_blank">info@smarttrak.co</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Address:</h4>
                                            <p>300 S Main Street, Suite 212
                                Holly Springs, NC 27540</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-lower bg-blue position-relative">
                <div className="container">
                    <div className="footer-copyright-text footer-copyright-text-white">
                        <p>Copyright ©2021 Smarttrak. Designed &amp; Developed By <Link to="/">Smarttrak</Link></p>
                    </div>
                </div>
            </div>

            <div className="scroll-top scrolltopactive" id="scrolltop">
                <div className="scroll-top-inner">
                    <i className="mdi mdi-arrow-up"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
