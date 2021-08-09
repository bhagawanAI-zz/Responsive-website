import React from "react";

const solutionBlock = () => {
	return (
        <section className="section-padding--small bg-magnolia w-100">
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
                            <p>Molestie lorem est faucibus Faucibus erat phasellus placerat proinint aptent pulvinar
                                fusce nostra porta sem platea nec, donec fusce erat Molestie lorem est faucibus faucibus
                                erat phasellus placerat proin aptent pulvinar fusce nostra port</p>
                            <a className="button button-light" href="#">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default solutionBlock;
