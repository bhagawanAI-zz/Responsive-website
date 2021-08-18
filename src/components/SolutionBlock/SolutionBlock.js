import React from "react";

const solutionBlock = () => {
	return (
        <section className="section-padding--small bg-magnolia w-100" id="Services">
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
        </section>
	);
};

export default solutionBlock;
