import React from "react";

const aboutUs = () => {
	return (
        <section className="section-padding--small w-100 bg-magnolia">
            <div className="container">
                <div className="row no-gutters align-items-center">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <div className="about__content">
                            <h2>Leading the Digital Entertainment Revolution</h2>
                            <p>Molestie lorem est faucibus Faucibus erat phasellus placerat proinint aptent pulvinar
                                fusce nostra porta sem platea nec, donec fusce erat Molestie lorem est faucibus faucibus
                                erat phasellus placerat proin aptent pulvinar fusce nostra port</p>
                            <a className="button button-light" href="#">Know More</a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="about__img">
                            <img className="img-fluid" src="images/home/about.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default aboutUs;
