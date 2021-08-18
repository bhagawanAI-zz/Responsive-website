import React from "react";
import ScrollToTop from "react-scroll-to-top";

const aboutUs = () => {
	return (
        <section>
            <div className="hero-banner w-100 mb-30px hero-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="">
                                <img className="img-fluid w-100" src="images/home/about-ai.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8 pt-5">
                            <div className="hero-banner__content">
                                <div className="text">
                                    <span
                                        className="text-white-50 border-b-2 border-indigo-600 uppercase">about us</span>
                                    <h2 className="font-bold text-3xl my-4 sm:text-4xl text-white">About <span
                                        className="text-white font-bold">Our Company</span></h2>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla numquam
                                        obcaecati placeat quia, repellat tempore voluptatum.</p>
                                </div>
                            </div>
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
