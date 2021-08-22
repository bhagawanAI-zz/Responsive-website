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
                                    <h5 className="font-weight-bold">
                                        SmartTrak Solar Systems
                                    </h5>
                                    <h5>Address: <small className="text-muted">
                                        H.No.1-90/2/10/E, Ground Floor, Cyberabad, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081</small>
                                    </h5>
                                    <h5>Email: <small className="text-muted">hr@smarttrak.co</small></h5>
                                    <h5>Contact: <small className="text-muted">040 4868 4455</small></h5>
                                    <div className="text-center">
                                        <div className="w-100">
                                            <iframe className="smarttrak-map" frameBorder="0" scrolling="no"
                                                    marginHeight="0" marginWidth="0"
                                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=H.No.1-90/2/10/E,%20Ground%20Floor,%20Cyberabad,%20Vittal%20Rao%20Nagar,%20Madhapur,%20Hyderabad,%20Telangana%20500081+(SmartTrak%20Solar%20Systems)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                            <a href="https://www.maps.ie/draw-radius-circle-map/">Radius map
                                                calculator</a></div>
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
