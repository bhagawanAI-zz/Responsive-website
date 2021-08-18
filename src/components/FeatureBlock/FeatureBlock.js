import React from "react";

const featureBlock = () => {
	return (
        <section className="section-margin w-100" id="FeatureBlock">
            <div className="container">
                <div className="section-intro pb-85px text-center">
                    <h2 className="section-intro__title">AIoT Feature</h2>
                    <p className="section-intro__subtitle">These solutions will
                        focus primarily upon optimizing system and network operations as well as
                        extracting value from industry data through dramatically improved analytics
                        and decision-making processes.</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="mdi mdi-puzzle"></i>
                </span>
                                <h3 className="card-feature__title">Decision Making</h3>
                                <p className="card-feature__subtitle">The Artificial
                                    Intelligence of Things will provide the ability to capture streaming data,
                                    determine valuable attributes, and make decisions in real-time.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="mdi mdi-mouse"></i>
                </span>
                                <h3 className="card-feature__title">Business Solution</h3>
                                <p className="card-feature__subtitle">AI enhances the ability for big data analytics and IoT platforms to provide
                                    value to each of these market segments.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="mdi mdi-headset"></i>
                </span>
                                <h3 className="card-feature__title">AIoT Analytics</h3>
                                <p className="card-feature__subtitle">These solutions will
                                    focus primarily upon optimizing system and network operations as well as
                                    extracting value from industry data through dramatically improved analytics
                                    and decision-making processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default featureBlock;
