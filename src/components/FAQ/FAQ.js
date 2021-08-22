import React from "react";
import ScrollToTop from "react-scroll-to-top";

const faq = () => {
	return (
        <section id="faq">
            <div className="hero-banner w-100 mb-30px hero-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-banner__img">
                                <img className="img-fluid" src="images/home/faq.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5">
                            <div className="hero-banner__content">
                                <h1>Everything you need to know about AI</h1>
                                <p>Everything you need to know about AI can be found here—why AI is important,
                                    how AI works with 5G, and the differences between edge computing and distributed intelligence. And of course, how AI improves smartphones. Discover how Qualcomm Technologies is making AI ubiquitous.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 bg-magnolia w-100 aboutus-block">
                <div className="container">
                    <div className="container">
                        <div className="accordion" id="accordionExample">
                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingOne">
                                    <h2 className="mb-0" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        I have heard about AI. What is it?
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Artificial Intelligence (AI) is the concept of having machines “think like humans” — in other words, performing tasks like reasoning, planning, learning, and understanding language. While no one is expecting parity with human intelligence today or in the near future, AI has a big application in our day to day lives. The brain behind artificial intelligence is a technology called machine learning, which is designed to make our jobs easier and more productive.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingTwo">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        Why is AI such a hot topic lately?
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        A lot of things have aligned to make this an exciting time for major advancements in AI.

                                        <ul>
                                            <li>Processing power has improved at an amazing rate — there’s been a trillion-fold increase in performance over the last 60 years.</li>
                                            <li>The cost of data processing has become more affordable.</li>
                                            <li>There’s more data that needs to be analysed because businesses are capturing more signals from customer interactions.</li>
                                            <li>Application of AI has already improved consumer apps significantly — leading to further expectations in making life easier, spurring the need for AI technical know how and R&D.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingThree">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        What are the advantages of artificial intelligence?
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        AI is a powerful tool for addressing a variety of challenges, such as voice translation or wireless channel estimation, that are difficult to model or solve with traditional methods. For the end user, AI seamlessly offers enhanced experiences, personal assistance, and automation of repetitive tasks. In addition, AI can make devices more energy efficient and allow us to interact with them in more convenient ways, like with an always-on voice user interface.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingFour">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        What are the challenges surrounding AI models?
                                    </h2>
                                </div>

                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        The biggest challenges AI models face are how to be more power efficient, how to learn from less data, how to learn from unlabeled data (unsupervised learning), and how to generalize across multiple tasks. The industry is also focused on making AI unbiased and explainable, such that we know how it works, where it fails, and how to quantify confidence levels. For example, we want to understand how the AI used for autonomous driving is deciding how to drive safely on a road under various environments and weather conditions.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingFive">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFive"
                                        aria-expanded="false" aria-controls="collapseFive">
                                        What are the major improvements happening in AI?
                                    </h2>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        AI is currently benefiting from more data and more efficient hardware, as well as better AI tools and networks/algorithms. Advancements in state-of-the-art accuracy for various tasks happen regularly due to the collaborative nature of the AI research community through papers and workshops. For example, Qualcomm AI Research has published many papers in the areas of power efficiency, personalization, and efficient learning. These advancements are being applied in more areas, integrated into different types of devices, and enhancing our user experiences.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingSix">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseSix"
                                        aria-expanded="false" aria-controls="collapseSix">
                                        What is edge computing?
                                    </h2>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Edge computing brings computation and data storage closer to the location where it is needed, saving bandwidth and improving response time as a result. Edge computing may have different meanings depending on context: the edge of a network, the edge of a cloud, or the edge device. For example, edge computing could mean on-device processing for a smartphone or IoT device, or it could mean processing in the edge cloud or close to a base station for a cellular network provider.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingSeven">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseSeven"
                                        aria-expanded="false" aria-controls="collapseSeven">
                                        What is distributed intelligence?
                                    </h2>
                                </div>

                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Distributed intelligence is the result of AI processing that happens jointly on the device, edge cloud, and/or central cloud processing. A low-latency, high-reliability, and high-capacity link is essential for enabling distributed intelligence and allowing workloads to be processed in the most appropriate place. This is why 5G is so important for enabling distributed intelligence for a variety of use cases, such as extended reality (XR) and the factory of the future.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingEight">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseEight"
                                        aria-expanded="false" aria-controls="collapseEight">
                                        Is Google search engine an AI?
                                    </h2>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        RankBrain is an algorithm learning AI system that has been in use by Google since 2015. It help process search results and provide more relevant answers for users.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingNine">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseNine"
                                        aria-expanded="false" aria-controls="collapseNine">
                                        What are the current capabilities of artificial intelligence?
                                    </h2>
                                </div>
                                <div id="collapseNine" className="collapse" aria-labelledby="headingNine"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Google Duplex can make phone calls to make restaurant and hair appointments. Google Deep Mind won a global Starcraft game challenge against gaming pros. Amazon uses AI for book and product recommendations. Websites are using Chat-bots to answer basic customer queries. Airports are using image recognition for staff security. Rolls Royce is using AI for predictive maintenance and servicing of airplane engines. Informatica is using AI for compliance and data gathering and analysis purposes. Fintech is using AI to combine and analyse more diverse datasets. In Healthcare AI can help analyse more data for preventative medicine. Baidu in China is producing self driving buses for large cities.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingTen">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTen"
                                        aria-expanded="false" aria-controls="collapseTen">
                                        What are the dangers of artificial intelligence?
                                    </h2>
                                </div>

                                <div id="collapseTen" className="collapse" aria-labelledby="headingTen"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Dangers include having control of critical infrastructure like the power grid and going out of control or being hacked.
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-sm p-3">
                                <div className="card-head" id="headingEleven">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseEleven"
                                        aria-expanded="false" aria-controls="collapseEleven">
                                        What is the future of artificial intelligence?
                                    </h2>
                                </div>
                                <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Automated transport, taking over dangerous jobs, robots working with humans, improved elderly care, cyborg (organic/bio-mechanic) organisms, environment monitoring and response for climate change goals.
                                    </div>
                                </div>
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
