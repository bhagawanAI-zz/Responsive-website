import React from "react";
import ScrollToTop from "react-scroll-to-top";

const contactUs = () => {
	return (
        <section id="contact">
            <div className="hero-banner w-100 mb-30px hero-block">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-7 py-4 bg-light shadow-sm rounded">
                            <div className="hero-banner__content">
                                <div className="col-12">
                                    <h5>Address: <small className="text-muted">
                                        Venkatadri IT Park, HP Avenue,
                                        Konnappana, Electronic city, Bengaluru, Karnataka 560069</small>
                                    </h5>
                                    <h5>Email: <small className="text-muted">hire@luxurytaxicab.com</small></h5>
                                    <h5>Contact: <small className="text-muted">+91 98765 10278 || +91 76589
                                        14244</small></h5>
                                    <div className="text-center">
                                        <img className="img-fluid w-100 contact-image"
                                             src="https://csds.qld.edu.au/sdc/resources/images/find-us-map.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ScrollToTop smooth/>
            </div>
        </section>
	);
};

export default contactUs;
