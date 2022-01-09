import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Link} from "react-router-dom";

const Landing = () => {
	return (
        <section>
            <div className="hero-banner w-100 mb-30px hero-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero-banner__img">
                                <img className="img-fluid" src="images/banner/hero-banner.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 pt-5">
                            <div className="hero-banner__content">
                                <h1>Artificial Intelligence of Things</h1>
                                <p>Smarttrak AI is a AIOT company providing solutions to industry verticals, inferencing Deep
                                    Learning Models on Edge based Internet Of Things Devices.</p>
                                <Link to='/aboutus' className="button bg">
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-margin w-100 feature-block" id="FeatureBlock">
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
            </div>

            <div className="section-margin w-100 offer-block">
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
            </div>

            <div className="section-padding--small bg-magnolia w-100 solution-block">
                <div className="container">
                    <div className="row align-items-center pt-xl-3 pb-xl-5">
                        <div className="col-lg-6">
                            <div className="solution__img text-center text-lg-left mb-4 mb-lg-0">
                                <img className="img-fluid" src="images/home/solution.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="solution__content">
                                <h2>Simple Solutions for Complex Connections</h2>
                                <p>Currently, many Artificial Intelligence of Things use cases are very retail
                                    product oriented, many of which focus on cognitive computing in consumer
                                    appliances. For example, Sharp refers to AIoT as “People-Oriented IoT =
                                    AIoT” for “more responsive technology” as part of what they refer to as the
                                    “Smart Life”.</p>
                                {/*<a className="button button-light" href="#">Know More</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-padding--small bg-white w-100 aboutus-block">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                        <div className="col-md-5 mb-5 mb-md-0">
                            <div className="about__content">
                                <h2>Leading the Digital Entertainment Revolution</h2>
                                <p>As IoT networks proliferate throughout every major industry vertical, there will
                                    be an increasingly large amount of unstructured machine data. The growing
                                    amount of human-oriented and machine generated data will drive substantial
                                    opportunities for AI support of unstructured data analytics solutions.</p>
                                {/*<a className="button button-light" href="#">Know More</a>*/}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="about__img">
                                <img className="img-fluid" src="images/home/digital.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="py-5 my-3 bg-magnolia w-100 client-block">
                <div className="container">
                    <div className="section-intro pb-5 text-center">
                        <h2 className="section-intro__title">Our Clients</h2>
                        <p className="section-intro__subtitle">Your Passion is our Satisfaction. Best Service, Right Time, Right People. Definitely, We can Serve you better. Service is Everywhere. Service Truly Different.</p>
                    </div>

                    <div className="owl-carousel owl-theme testimonial">
                        <div className="testimonial__item text-center">
                            <div className="testimonial__img">
                                <img src="images/testimonial/testimonial1.png" alt=""/>
                            </div>
                            <div className="testimonial__content">
                                <h3>Stephen Mcmilan</h3>
                                <p>Executive, ACI Group</p>
                                <p className="testimonial__i">Also made from. Give may saying meat there from heaven it
                                    lights face had is gathered god earth light for life may itself shall whales made
                                    they're blessed whales also made from give may saying meat. There from heaven it lights
                                    face had also made from. Give may saying meat there from heaven</p>
                            </div>
                        </div>
                        <div className="testimonial__item text-center">
                            <div className="testimonial__img">
                                <img src="images/testimonial/testimonial1.png" alt=""/>
                            </div>
                            <div className="testimonial__content">
                                <h3>Stephen Mcmilan</h3>
                                <p>Executive, ACI Group</p>
                                <p className="testimonial__i">Also made from. Give may saying meat there from heaven it
                                    lights face had is gathered god earth light for life may itself shall whales made
                                    they're blessed whales also made from give may saying meat. There from heaven it lights
                                    face had also made from. Give may saying meat there from heaven</p>
                            </div>
                        </div>
                        <div className="testimonial__item text-center">
                            <div className="testimonial__img">
                                <img src="images/testimonial/testimonial1.png" alt=""/>
                            </div>
                            <div className="testimonial__content">
                                <h3>Stephen Mcmilan</h3>
                                <p>Executive, ACI Group</p>
                                <p className="testimonial__i">Also made from. Give may saying meat there from heaven it
                                    lights face had is gathered god earth light for life may itself shall whales made
                                    they're blessed whales also made from give may saying meat. There from heaven it lights
                                    face had also made from. Give may saying meat there from heaven</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="clients_logo_area py-5 w-100 carousel-block">
                <div className="container">
                    <div className="clients_slider owl-carousel">
                        <div className="item">
                            <img src="images/clients-logo/c-logo-1.png" alt=""/>
                        </div>
                        <div className="item">
                            <img src="images/clients-logo/c-logo-2.png" alt=""/>
                        </div>
                        <div className="item">
                            <img src="images/clients-logo/c-logo-3.png" alt=""/>
                        </div>
                        <div className="item">
                            <img src="images/clients-logo/c-logo-4.png" alt=""/>
                        </div>
                        <div className="item">
                            <img src="images/clients-logo/c-logo-5.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>*/}

            <div>
                <ScrollToTop smooth/>
            </div>
        </section>
	);
};

export default Landing;
