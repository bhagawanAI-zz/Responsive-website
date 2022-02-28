import React from "react";

const services = () => {
	return (
        <section>
            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/about-bg.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>At Smarttrak, we use data to develop models that mimic your real-world assets in digital space.</h2>
                                </div>
                                <div className="about-content">
                                    <p>A digital twin is a virtual/ digital replica of physical entities such as devices, people, processes, or systems that help businesses make model-driven decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>AI Powered Digital Twins</h2>
                                </div>
                                <div className="about-content">
                                    <p>The digital twin uses IoT sensors, log files and other relevant information to collect real-time data for accurate modeling of assets.
                                        These models are then combined without  AI-powered analytics tools in a virtual setting.</p>
                                </div>

                                <div className="section-title section-title-left text-start mt-5 mb-0">
                                    <small className="mb-0">The purpose of a digital twin is to run cost-effective simulations.</small>
                                    <p>Digital twins can benefit from artificial intelligence. AI and machine learning algorithms enable businesses
                                        both to build some digital twins and also to process a large amount of data collected from digital twins.
                                        For example, by leveraging AI capabilities with digital twins, engineers can accelerate the design processes by quickly
                                        evaluating many possible design alternatives.</p>

                                    <small className="mb-0">Benefits:</small>
                                    <ul>
                                        <li>
                                            Lower maintenance costs via predictive maintenance: Digital twins enable businesses to understand potential sources of failure so that businesses minimize non-value adding maintenance activities.
                                        </li>
                                        <li>
                                            Improved productivity: This is due to reduced downtime due to predictive maintenance and improved performance via optimization.
                                        </li>
                                        <li>
                                            Faster production times: This is due to improved optimization thanks to digital twins.
                                        </li>
                                        <li>
                                            Testing prior to manufacturing: Businesses can use digital twins to understand the feasibility of upcoming products.
                                        </li>
                                        <li>
                                            Improved customer satisfaction: All of these would lead to happier customers that receive higher quality products without delays.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default services;
