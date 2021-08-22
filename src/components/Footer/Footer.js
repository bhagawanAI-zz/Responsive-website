import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
	return (
        <footer className="footer-area section-gap w-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link to='/aboutus'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to='/t&c'>
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to='/faq'>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-4 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Features</h4>
                        <ul>
                            <li>
                                <Link to='/services'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact'>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to='/career'>
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link to='/investor'>
                                    Investor Relations
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Download Apps</h4>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="images/play-store.svg" width={130} alt="Google Play Store"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/app-store.svg" width={130} alt="Google Play Store"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="col-xl-4 col-md-8 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Newsletter</h4>
                        <p>You can trust us. we only send promo offers,</p>
                        <div className="form-wrap" id="mc_embed_signup">
                            <form target="_blank"
                                  action=""
                                  method="get" className="form-inline">
                                <input className="form-control" name="EMAIL" placeholder="Your Email Address"
                                       required="" type="email"/>
                                    <button className="click-btn btn btn-default">subscribe</button>

                            </form>
                        </div>
                    </div>*/}
                </div>
                <div className="footer-bottom row align-items-center text-center text-lg-left">
                    <p className="footer-text m-0 col-lg-8 col-md-12">
                        Copyright &copy; 2021
                        All rights reserved by <a href="#" target="_blank">Smarttrak</a>
                    </p>
                    <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                        <a href="https://www.facebook.com/SmarttrakSolarSystems/" target="_blank"><i className="mdi mdi-facebook"/></a>
                        <a href="https://in.linkedin.com/company/smarttrak-solar-systems-private-limited" target="_blank"><i className="mdi mdi-linkedin"/></a>
                        {/*<a href="#"><i className="mdi mdi-instagram"/></a>*/}
                        <a href="https://www.youtube.com/watch?v=FIuYm_XX53w" target="_blank"><i className="mdi mdi-youtube"/></a>
                    </div>
                </div>
            </div>
        </footer>
	);
};

export default Footer;
