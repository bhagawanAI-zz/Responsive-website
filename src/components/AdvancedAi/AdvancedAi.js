import React from "react";

const solutions = () => {
	return (
        <section>
            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/about-ai.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>Advanced AI for Manufacturing</h2>
                                </div>
                                <div className="about-content">
                                    <p>The most important asset for a manufacturing company is its machinery. Any unexpected downtime or
                                        degradation can cause a significant loss. Also,every industry has its own set of problems, and
                                        every anomaly is not a damaging one.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p>We have trained and deployed the best Deep Neural Network Models when finding the unknown from very
                                        little available data.</p>
                                </div>

                                <div className="section-title section-title-left text-start mt-5 mb-0">
                                    <small className="mb-0">Transform your business to get end-to-end value with data driven decision making and Explainable AI</small>
                                    <p><b>Explainable AI (XAI) is an emerging field in machine learning</b> that aims to address how black box
                                        decisions of AI systems are made. This area inspects and tries to understand the steps and models
                                        involved in making decisions. XAI is thus expected by most of the owners, operators and users to
                                        answer some hot questions like: Why did the AI system make a specific prediction or decision? Why
                                        didn’t the AI system do something else? When did the AI system succeed and when did it fail?
                                        When do AI systems give enough confidence in the decision that you can trust it, and how can the
                                        AI system correct errors that arise?</p>

                                    <p>The Explainable AI (XAI) aims to create a suite of machine learning techniques that:</p>
                                    <ul>
                                        <li>
                                            Produce more explainable models, while maintaining a high level of learning performance (prediction accuracy).
                                        </li>
                                        <li>
                                            Enable human users to understand, appropriately trust, and effectively manage the emerging generation of artificially intelligent partners.
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

export default solutions;
