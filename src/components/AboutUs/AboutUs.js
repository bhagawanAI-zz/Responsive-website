import React from "react";
import ScrollToTop from "react-scroll-to-top";

const aboutUs = () => {
	return (
        <section className="section-padding--small w-100 bg-magnolia">
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
                            <img className="img-fluid" src="images/home/about.png" alt=""/>
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
