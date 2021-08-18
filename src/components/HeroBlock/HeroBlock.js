import React from "react";

const heroblock = () => {
	return (
        <section className="hero-banner w-100 mb-30px" id="Home">
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
                            <a className="button bg" href="#">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default heroblock;
