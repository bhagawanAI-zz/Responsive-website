import React from "react";

const products = () => {
    return (
        <section>
            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/about-ai.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-md-8 pb-30">
                            <div className="about-section-item about-item-details mb-4">
                                <div className="section-title section-title-left text-start">
                                    <h2>Product Heading</h2>
                                </div>
                                <div className="about-content">
                                    <p>Product Description</p>
                                </div>
                            </div>

                            <button className="btn main-btn float-right" type="button">
                                Know More
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 pb-30">
                            <div className="about-section-item about-item-details mb-4">
                                <div className="section-title section-title-left text-start">
                                    <h2>Product Heading</h2>
                                </div>
                                <div className="about-content">
                                    <p>Product Description</p>
                                </div>
                            </div>

                            <button className="btn main-btn" type="button">
                                Know More
                            </button>
                        </div>
                        <div className="col-md-4 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/about-ai.png" alt="shape"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/about-ai.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-md-8 pb-30">
                            <div className="about-section-item about-item-details mb-4">
                                <div className="section-title section-title-left text-start">
                                    <h2>Product Heading</h2>
                                </div>
                                <div className="about-content">
                                    <p>Product Description</p>
                                </div>
                            </div>

                            <button className="btn main-btn float-right" type="button">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default products;
