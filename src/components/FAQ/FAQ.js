import React from "react";
import ScrollToTop from "react-scroll-to-top";

const faq = () => {
	return (
        <section>
            <div className="hero-banner w-100 mb-30px hero-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero-banner__img">
                                <img className="img-fluid" src="images/banner/hero-banner.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 pt-5">
                            <div className="hero-banner__content">
                                <h1>Artificial Intelligence of Things</h1>
                                <p>Smarttrak AI is a AIOT company providing solutions to industry verticals, inferencing Deep
                                    Learning Models on Edge based Internet Of Things Devices.</p>
                                <a className="button bg" href="#">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-padding--small bg-magnolia w-100 aboutus-block">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                        <div className="col-md-5 mb-5 mb-md-0">
                            <div className="about__content">
                                <h2>Leading the Digital Entertainment Revolution</h2>
                                <p>As IoT networks proliferate throughout every major industry vertical, there will
                                    be an increasingly large amount of unstructured machine data. The growing
                                    amount of human-oriented and machine generated data will drive substantial
                                    opportunities for AI support of unstructured data analytics solutions.</p>
                                {/*<a className="button button-light" href="#">Know More</a>*/}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="about__img">
                                <img className="img-fluid" src="images/home/about.png" alt=""/>
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

export default faq;
