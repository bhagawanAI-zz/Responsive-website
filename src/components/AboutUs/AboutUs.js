import React from "react";
import ScrollToTop from "react-scroll-to-top";

const aboutUs = () => {
	return (
        <section>
            <div className="hero-banner w-100 mb-30px hero-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="">
                                <img className="img-fluid w-100" src="images/home/about-ai.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8 pt-5">
                            <div className="hero-banner__content">
                                <h2 className="font-weight-bold text-3xl my-4 sm:text-4xl text-white">About <span
                                    className="text-white font-weight-bold">Our Company</span></h2>
                                <p className="text-white mb-4">Smarttrak AI is a AIOT company providing solutions to
                                    industry verticals, inferencing Deep Learning Models on Edge based Internet Of Things Devices.</p>

                                <p className="text-white">These solutions will focus primarily upon optimizing system and network
                                    operations as well as extracting value from industry data through dramatically improved analytics and decision-making processes.</p>
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

export default aboutUs;
