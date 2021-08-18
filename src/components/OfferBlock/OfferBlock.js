import React from "react";

const offerblock = () => {
	return (
        <section className="section-margin w-100">
            <div className="container">
                <div className="section-intro pb-85px text-center">
                    <h2 className="section-intro__title">Features We Offer</h2>
                    <p className="section-intro__subtitle">The Artificial Intelligence of Things is transformational for both technologies as
                        AI adds value to IoT through machine learning and decision making and IoT
                        adds value to AI through connectivity and data exchange. The AIoT market
                        constitutes solutions, applications, and services involving AI in IoT Systems
                        and IoT support of AI Solutions.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="row offer-single-wrapper">
                            <div className="col-lg-6 offer-single">
                                <div className="card offer-single__content text-center">
                  <span className="offer-single__icon">
                    <i className="mdi mdi-square-edit-outline"></i>
                  </span>
                                    <h4>Easy To Manage</h4>
                                    <p>AI improves IoT operations and transforms IoT system
                                        originated data into actionable insights.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 offer-single">
                                <div className="card offer-single__content text-center">
                  <span className="offer-single__icon">
                    <i className="mdi mdi-pencil-ruler"></i>
                  </span>
                                    <h4>Analytics Tool</h4>
                                    <p>AIoT will be instrumental
                                        in solving many existing problems, such as human asset management.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row offer-single-wrapper">
                            <div className="col-lg-6 offer-single">
                                <div className="card offer-single__content text-center">
                  <span className="offer-single__icon">
                    <i className="mdi mdi-scissors-cutting"></i>
                  </span>
                                    <h4>Professionals Tools</h4>
                                    <p>Enterprise is continuously strongly with the need to hire and retain
                                        the best and brightest workers.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 offer-single">
                                <div className="card offer-single__content text-center">
                  <span className="offer-single__icon">
                    <i className="mdi mdi-lightbulb-on-outline"></i>
                  </span>
                                    <h4>Ready Content</h4>
                                    <p>AI Decision as a Service function for Human Asset Management professionals.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="offer-single__img">
                            <img className="img-fluid" src="images/home/offer.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default offerblock;
