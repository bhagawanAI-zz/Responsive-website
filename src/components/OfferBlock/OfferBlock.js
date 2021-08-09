import React from "react";

const offerblock = () => {
	return (
        <section className="section-margin w-100">
            <div className="container">
                <div className="section-intro pb-85px text-center">
                    <h2 className="section-intro__title">Features We Offer</h2>
                    <p className="section-intro__subtitle">Vel aliquam quis, nulla pede mi commodo tristique nam hac.
                        Luctus torquent velit felis commodo pellentesque nulla cras. Tincidunt hacvel alivquam quis
                        nulla pede mi commodo tristique nam hac luctus torquent</p>
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
                                    <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer
                                        habitant.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 offer-single">
                                <div className="card offer-single__content text-center">
                  <span className="offer-single__icon">
                    <i className="mdi mdi-pencil-ruler"></i>
                  </span>
                                    <h4>Analytics Tool</h4>
                                    <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer
                                        habitant.</p>
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
                                    <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer
                                        habitant.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 offer-single">
                                <div className="card offer-single__content text-center">
                  <span className="offer-single__icon">
                    <i className="mdi mdi-lightbulb-on-outline"></i>
                  </span>
                                    <h4>Ready Content</h4>
                                    <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer
                                        habitant.</p>
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
        </section>
	);
};

export default offerblock;
