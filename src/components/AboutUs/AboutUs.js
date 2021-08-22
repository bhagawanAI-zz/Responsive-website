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

            <div className="feat bg-light py-5" id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="section-head col-sm-12">
                            <h4><span>Why Choose</span> Us?</h4>
                            <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development.
                                Because we know the digital world and we know that how to handle it. With working
                                knowledge of online, SEO and social media.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"><span className="icon feature_box_col_one"><i className="mdi mdi-globe-model"></i></span>
                                <h6>Modern Design</h6>
                                <p>We use latest technology for the latest world because we know the demand of
                                    peoples.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"><span className="icon feature_box_col_two"><i className="mdi mdi-anchor"></i></span>
                                <h6>Creative Design</h6>
                                <p>We are always creative and and always lisen our costomers and we mix these two things
                                    and make beast design.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"><span className="icon feature_box_col_three"><i className="mdi mdi-face-agent"></i></span>
                                <h6>24 x 7 User Support</h6>
                                <p>If our customer has any problem and any query we are always happy to help then.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"><span className="icon feature_box_col_four"><i className="mdi mdi-handshake"></i></span>
                                <h6>Business Growth</h6>
                                <p>Everyone wants to live on top of the mountain, but all the happiness and growth
                                    occurs while you're climbing it</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"><span className="icon feature_box_col_five"><i className="mdi mdi-strategy"></i></span>
                                <h6>Market Strategy</h6>
                                <p>Holding back technology to preserve broken business models is like allowing
                                    blacksmiths to veto the internal combustion engine in order to protect their
                                    horseshoes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"><span className="icon feature_box_col_six"><i className="mdi mdi-database"></i></span>
                                <h6>Affordable cost</h6>
                                <p>Love is a special word, and I use it only when I mean it. You say the word too much
                                    and it becomes cheap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white w-100 py-5 solution-block">
                <div className="container">
                    <div className="row align-items-center pt-xl-3 pb-xl-5">
                        <div className="col-lg-5">
                            <div className="solution__img text-center text-lg-left mb-4 mb-lg-0">
                                <img className="img-fluid" src="images/home/about-bg.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="solution__content">
                                <h2>Simple Solutions for Complex Connections</h2>
                                <p>Currently, many Artificial Intelligence of Things use cases are very retail
                                    product oriented, many of which focus on cognitive computing in consumer
                                    appliances. For example, Sharp refers to AIoT as “People-Oriented IoT =
                                    AIoT” for “more responsive technology” as part of what they refer to as the
                                    “Smart Life”.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-magnolia w-100 aboutus-block">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                        <div className="col-md-7 mb-5 mb-md-0">
                            <div className="about__content">
                                <h2>Leading the Digital Entertainment Revolution</h2>
                                <p>As IoT networks proliferate throughout every major industry vertical, there will
                                    be an increasingly large amount of unstructured machine data. The growing
                                    amount of human-oriented and machine generated data will drive substantial
                                    opportunities for AI support of unstructured data analytics solutions.</p>
                                {/*<a className="button button-light" href="#">Know More</a>*/}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="about__img">
                                <img className="img-fluid" src="images/home/AI.png" alt=""/>
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
