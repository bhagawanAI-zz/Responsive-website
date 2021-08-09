import React from "react";

const Pricing = () => {
	return (
        <section className="section-margin w-100" id="Pricing">
            <div className="container">
                <div className="section-intro pb-85px text-center">
                    <h2 className="section-intro__title">Choose Your Plan</h2>
                    <p className="section-intro__subtitle">Vel aliquam quis, nulla pede mi commodo tristique nam hac.
                        Luctus torquent velit felis commodo pellentesque nulla cras. Tincidunt hacvel alivquam quis
                        nulla pede mi commodo tristique nam hac luctus torquent</p>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="card text-center card-pricing">
                            <div className="card-pricing__header">
                                <h4>Normal</h4>
                                <p>Attend only first day</p>
                                <h1 className="card-pricing__price"><span>$</span>45.00</h1>
                            </div>
                            <ul className="card-pricing__list">
                                <li><i className="mdi mdi-check"></i>Unlimited Entrance</li>
                                <li><i className="mdi mdi-check"></i>Comfortable Seat</li>
                                <li><i className="mdi mdi-check"></i>Paid Certificate</li>
                                <li className="unvalid"><i className="mdi mdi-close"></i>Day One Workshop</li>
                                <li className="unvalid"><i className="mdi mdi-close"></i>One Certificate</li>
                            </ul>
                            <div className="card-pricing__footer">
                                <button className="button button-light">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="card text-center card-pricing">
                            <div className="card-pricing__header">
                                <h4>Advanced</h4>
                                <p>Attend only first day</p>
                                <h1 className="card-pricing__price"><span>$</span>55.00</h1>
                            </div>
                            <ul className="card-pricing__list">
                                <li><i className="mdi mdi-check"></i>Unlimited Entrance</li>
                                <li><i className="mdi mdi-check"></i>Comfortable Seat</li>
                                <li><i className="mdi mdi-check"></i>Paid Certificate</li>
                                <li className="unvalid"><i className="mdi mdi-close"></i>Day One Workshop</li>
                                <li className="unvalid"><i className="mdi mdi-close"></i>One Certificate</li>
                            </ul>
                            <div className="card-pricing__footer">
                                <button className="button button-light">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="card text-center card-pricing">
                            <div className="card-pricing__header">
                                <h4>Ultimate</h4>
                                <p>Attend only first day</p>
                                <h1 className="card-pricing__price"><span>$</span>65.00</h1>
                            </div>
                            <ul className="card-pricing__list">
                                <li><i className="mdi mdi-check"></i>Unlimited Entrance</li>
                                <li><i className="mdi mdi-check"></i>Comfortable Seat</li>
                                <li><i className="mdi mdi-check"></i>Paid Certificate</li>
                                <li className="unvalid"><i className="mdi mdi-close"></i>Day One Workshop</li>
                                <li className="unvalid"><i className="mdi mdi-close"></i>One Certificate</li>
                            </ul>
                            <div className="card-pricing__footer">
                                <button className="button button-light">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default Pricing;
