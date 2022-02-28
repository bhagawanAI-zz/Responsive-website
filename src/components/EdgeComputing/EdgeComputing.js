import React from "react";

const services = () => {
	return (
        <section>
            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/solution.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>Edge AI Is The Next Wave of AI</h2>
                                </div>
                                <div className="about-content">
                                    <p>Edge AI allows faster computing and insights, better data security, and efficient control over continuous operation.
                                    At Smarttrak, we have the right infrastructure to Prune,Quantize and Optimize the AI Models for all the Edge needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>Efficient Edge AI model</h2>
                                </div>
                                <div className="about-content">
                                    <p>AI relies heavily on data transmission and computation of complex machine learning algorithms.
                                        Edge computing sets up a new age computing paradigm that moves AI and machine learning to where the
                                        data generation and computation actually take place: the network’s edge. The amalgamation of
                                        both edge computing and AI gave birth to a new frontier: Edge AI.</p>

                                    <p>Edge AI allows faster computing and insights, better data security, and efficient control over continuous
                                        operation. As a result, it can enhance the performance of AI-enabled applications and keep the
                                        operating costs down. Edge AI can also assist AI in overcoming the technological challenges
                                        associated with it.</p>

                                    <p>Edge AI facilitates machine learning, autonomous application of deep learning models, and advanced
                                        algorithms on the Internet of Things (IoT) devices itself, away from cloud services.</p>

                                    <p>An efficient Edge AI model has an optimized infrastructure for edge computing that can handle bulkier
                                        AI workloads on the edge and near the edge. Edge AI paired with storage solutions can provide
                                        industry-leading performance and limitless scalability that enables businesses to use their data
                                        efficiently.</p>

                                    <p>Many global businesses are already reaping the benefits of Edge AI. From improving production monitoring
                                        of an assembly line to driving autonomous vehicles, Edge AI can benefit various industries.
                                        Moreover, the recent rolling out of 5G technology in many countries gives an extra boost for
                                        Edge AI as more industrial applications for the technology continue to emerge.</p>
                                </div>

                                <div className="section-title section-title-left text-start mt-5 mb-0">
                                    <small className="mb-0">A few benefits of edge computing powered by AI on enterprises include:</small>
                                    <ul>
                                        <li>
                                            An efficient predictive maintenance and asset management.
                                        </li>
                                        <li>
                                            Inspection span of less than one minute per product.
                                        </li>
                                        <li>
                                            Reduces field issues.
                                        </li>
                                        <li>
                                            Better customer satisfaction.
                                        </li>
                                        <li>
                                            Ensure large-scale Edge AI infrastructure and edge device life-cycle management.
                                        </li>
                                        <li>
                                            Improve traffic control measures in cities.
                                        </li>
                                    </ul>

                                    <p>
                                        Implementation of Edge AI is a wise business decision as Insight estimates an average 5.7% return on Investment (ROI) from industrial Edge AI deployments over the next three years.
                                    </p>
                                </div>

                                <div className="section-title section-title-left text-start mt-5 mb-0">
                                    <small className="mb-0">The Advantages of Applying Machine Learning on Edge</small>
                                    <ul>
                                        <li>
                                            Machine learning is the artificial simulation of the human learning process with the use of data and algorithms. Machine learning with the aid of Edge AI can lend a helping hand, particularly to businesses that rely heavily on IoT devices.
                                        </li>
                                        <li>
                                            <ul>
                                                <li><b>Some of the advantages of Machine Learning on edge are mentioned below.</b></li>

                                                <li>
                                                    <b>Privacy:</b> Today, information and data being the most valuable assets, consumers are cautious of the location of their data. The companies that can deliver AI-enabled personalized features in their applications can make their users understand how their data is being collected and stored. It enhances the brand loyalty of the customers.
                                                </li>

                                                <li>
                                                    <b>Reduced Latency:</b> Most of the data processes are carried out both on network and device levels. Edge AI eliminates the requirement to send huge amounts of data across networks and devices; thus, improve the user experience.
                                                </li>

                                                <li>
                                                    <b>Minimal Bandwidth:</b> Every single day, an enterprise with thousands of IoT devices has to transmit huge amounts of data to the cloud. Then carry out the analytics in the cloud, and retransmit the analytics results back to the device. Without a wider network bandwidth and cloud storage, this complex process would turn it into an impossible task. Not to mention the possibility of exposing sensitive information during the process.
                                                    However, Edge AI implements cloudlet technology, which is small-scale cloud storage located at the network’s edge. Cloudlet technology enhances mobility and reduces the load of data transmission. Consequently, it can bring down the cost of data services and enhance data flow speed and reliability.
                                                </li>

                                                <li>
                                                    <b>Low-Cost Digital Infrastructure:</b> According to Amazon, 90% of digital infrastructure costs come from Inference — a vital data generation process in machine learning. Sixty percent of organizations surveyed in a recent study conducted by RightScale agree that the holy grail of cost-saving hides in cloud computing initiatives. Edge AI, in contrast, eliminates the exorbitant expenses incurred on the AI or machine learning processes carried out on cloud-based data centers.
                                                </li>
                                            </ul>
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
