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
                            <h1>Advanced software made simple</h1>
                            <p>Vel aliquam quis, nulla pede mi commodo tristique nam hac Luctun torquent velit felis
                                commodo pellentesque nulla cras vel aliqua quisan nulla pede mi commoda</p>
                            <a className="button bg" href="#">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default heroblock;
