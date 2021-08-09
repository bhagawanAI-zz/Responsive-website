import React from "react";

const featureBlock = () => {
	return (
        <section className="section-margin w-100" id="FeatureBlock">
            <div className="container">
                <div className="section-intro pb-85px text-center">
                    <h2 className="section-intro__title">Awesome Soft Feature</h2>
                    <p className="section-intro__subtitle">Vel aliquam quis, nulla pede mi commodo tristique nam hac.
                        Luctus torquent velit felis commodo pellentesque nulla cras. Tincidunt hacvel alivquam quis
                        nulla pede mi commodo tristique nam hac luctus torquent</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="mdi mdi-puzzle"></i>
                </span>
                                <h3 className="card-feature__title">Unique Design</h3>
                                <p className="card-feature__subtitle">Molestie lorem est faucibus faucibus erat
                                    phasellus placerat proin aptent</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="mdi mdi-mouse"></i>
                </span>
                                <h3 className="card-feature__title">Business Solution</h3>
                                <p className="card-feature__subtitle">Molestie lorem est faucibus faucibus erat
                                    phasellus placerat proin aptent</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="mdi mdi-headset"></i>
                </span>
                                <h3 className="card-feature__title">Customer Support</h3>
                                <p className="card-feature__subtitle">Molestie lorem est faucibus faucibus erat
                                    phasellus placerat proin aptent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default featureBlock;
