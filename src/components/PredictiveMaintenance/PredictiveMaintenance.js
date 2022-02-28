import React from "react";

const solutions = () => {
	return (
        <section>
            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/tnc.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>Predictive Maintenance</h2>
                                </div>
                                <div className="about-content">
                                    <p>AI based predictive maintenance uses a variety of data from IoT sensors embedded in equipment, data from manufacturing operations, environmental data, and more to determine which components should be replaced before they break down.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start mt-5 mb-0">
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
