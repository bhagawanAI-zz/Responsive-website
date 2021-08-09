import React from "react";

const Footer = () => {
	return (
        <footer className="footer-area section-gap w-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Top Products</h4>
                        <ul>
                            <li><a href="#">Managed Website</a></li>
                            <li><a href="#">Manage Reputation</a></li>
                            <li><a href="#">Power Tools</a></li>
                            <li><a href="#">Marketing Service</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Features</h4>
                        <ul>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
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
                    <div className="col-xl-4 col-md-8 mb-4 mb-xl-0 single-footer-widget">
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
                    </div>
                </div>
                <div className="footer-bottom row align-items-center text-center text-lg-left">
                    <p className="footer-text m-0 col-lg-8 col-md-12">
                        Copyright &copy;
                        All rights reserved by <a href="#" target="_blank">Smarttrak</a>
                    </p>
                    <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                        <a href="#"><i className="mdi mdi-facebook"/></a>
                        <a href="#"><i className="mdi mdi-twitter"/></a>
                        <a href="#"><i className="mdi mdi-instagram"/></a>
                        <a href="#"><i className="mdi mdi-youtube"/></a>
                    </div>
                </div>
            </div>
        </footer>
	);
};

export default Footer;
