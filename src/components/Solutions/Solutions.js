import React from "react";
import {Link} from "react-router-dom";

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
                                    <h2>Redefine the way you do business with Smarttrak Solutions</h2>
                                </div>
                                <div className="about-content">
                                    <p>Our purpose is to deliver excellence in service and execution</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <h3>Advanced AI for Manufacturing</h3>
                                </div>

                                <div className="section-title section-title-left text-start mt-1 mb-0">
                                    <p>The most important asset for a manufacturing company is its machinery. Any unexpected downtime or degradation can cause a significant loss. Also,every industry has its own set of problems, and every anomaly is not a damaging one.</p>
                                    <p>We have trained and deployed the best Deep Neural Network Models when finding the unknown from very little available data.</p>
                                </div>

                                <div className="section-title section-title-left text-start mt-1 mb-0">
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

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <h3>SMART SOLAR ENERGY MANAGEMENT</h3>
                                </div>

                                <div className="section-title section-title-left text-start mt-1 mb-0">
                                    <p>We have started our journey since 2011 moving towards a greener and sustainable future</p>
                                    <ul>
                                        <li>
                                            Predict Energy Generation
                                        </li>
                                        <li>
                                            Optimize Energy consumption
                                        </li>
                                    </ul>
                                </div>

                                <div className="section-title section-title-left text-start mt-1 mb-0">
                                    <p>
                                        Our AI-driven solutions can help save energy by predicting accurate power generation through data analysis of smart grids.Also our forecasting capabilities can provide optimum balance between power demand and supply, thereby saving energy wastage.
                                    </p>

                                    <p>
                                        Save energy for a sustainable world with our Advanced AI-enabled solution. Make informed decisions about your personalized energy consumption from smart meter data, based on our advanced insights.
                                    </p>
                                </div>

                                <div className="section-title section-title-left text-start mt-1 mb-0">
                                    <small className="mb-0">Benefits</small>
                                    <ul>
                                        <li>
                                            Deep and proven knowledge of full-scale utility operations and control.
                                        </li>
                                        <li>
                                            Advanced applications for visualization, operation, optimization, and maintenance of transmission and subtransmission networks.
                                        </li>
                                        <li>
                                            Minimizing generation costs and power transmission losses and eliminate line overloads.
                                        </li>
                                        <li>
                                            Can be fully  integrated with existing SCADA systems.
                                        </li>
                                        <li>
                                            Allows utilities to best manage transmission and subtransmission networks.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <h3>Predictive Maintenance</h3>
                                </div>

                                <div className="section-title section-title-left text-start mt-1 mb-0">
                                    <p>AI based predictive maintenance uses a variety of data from IoT sensors embedded in equipment, data from manufacturing operations, environmental data, and more to determine which components should be replaced before they break down.</p>
                                </div>

                                <div className="section-title section-title-left text-start mt-1 mb-0">
                                    <p>
                                        Our deployed models look for patterns in data that indicate failure modes for specific components or generate more accurate predictions of the lifespan for a component given environmental conditions. For example:
                                    </p>
                                    <ul>
                                        <li>
                                            Detecting fragile spindles in milling machines using vibration sensors to identify patterns.
                                        </li>
                                        <li>
                                            Identifying first signs of clogging in heat exchangers by detecting temperature differences between upstream and downstream flows.
                                        </li>
                                        <li>
                                            Calling in specific vehicles from large car fleets for a tune-up, based on sensors that collect data and relay information on vehicle performance.
                                        </li>
                                        <li>
                                            Monitoring inflight conditions of commercial jet engines by measuring various temperature and vibration levels.
                                        </li>
                                    </ul>

                                    <p>
                                        When specific failure signals are observed, or component aging criteria are met, the components can then be replaced during scheduled maintenance windows.
                                    </p>

                                    <p>
                                        In general, AI based predictive maintenance typically generates a 10% reduction in annual maintenance costs, up to a 25% downtime reduction and a 25% reduction in inspections costs.
                                    </p>
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
