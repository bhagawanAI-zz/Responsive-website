import React from "react";

const services = () => {
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
                                    <h2>End-to-end Deep Learning and Machine Learning models for building AI systems.</h2>
                                </div>
                                <div className="about-content">
                                    <p>Our well trained and deployed Models are data-driven in nature ,simple to use and high performing.
                                    The main advantage of machine learning/deep learning  over traditional software engineering is that it allows
                                        one to build a component that performs a task by training a model from data,
                                        which removes the need for a human to specify exactly how to perform the task.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                
                                </div>
                                <div className="about-content">
                                    <p></p>
                                </div>

                                <div className="section-title section-title-left text-start mt-5 mb-0">
                                    <small className="mb-0">Benefits of using of our deployed models</small>
                                    <ul>
                                        <li>
                                            Better metrics: As we deploy well trained and tested Models ,performance  metrics such as precision and recall  are higher.
                                        </li>
                                        <li>
                                            Simplicity: As we deploy the End-to-end models ,problems of determining individual components and tasks needed to perform are not needed.
                                        </li>
                                        <li>
                                            Reduced effort: Require less work to use the Models with minimal design choices.
                                        </li>
                                        <li>
                                            Applicability to new tasks:Our  models can potentially work for a new task simply by retraining using new data without significant re-engineering for new tasks.
                                        </li>
                                        <li>
                                            Optimization: Our models are customized and optimized for the entire task.
                                        </li>
                                        <li>
                                            Lower degree of dependency on subject matter experts:Our models can be trained on naturally-occurring data, which reduces the need for specialized domain knowledge.
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
