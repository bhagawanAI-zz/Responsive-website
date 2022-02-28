import React from "react";
import {Link} from "react-router-dom";

const contactUs = () => {
	return (
        <section id="contact">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-10 py-4 bg-light shadow-sm rounded">
                        <div className="hero-banner__content">
                            <div className="col-12">
                                <h5 className="font-weight-bold">
                                    SmartTrak Solar Systems
                                </h5>
                                <h5>Address: <small className="text-muted">
                                    321 Trautz Ln, Holly Springs,NC 27540 USA</small>
                                </h5>
                                <h5>Email: <small className="text-muted">info@smarttrak.co</small></h5>
                                <h5>Contact: <small className="text-muted">(+1) 510-945-8169</small></h5>
                                <div className="text-center">
                                    <div className="w-100">
                                        <iframe width="100%" height="300" frameBorder="0" scrolling="no"
                                                marginHeight="0" marginWidth="0"
                                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1426%20Glenwater%20Drive,%20Cary,%20NC,%20USA+(Smarttrak%20Solar%20Solutions)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                            </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default contactUs;
