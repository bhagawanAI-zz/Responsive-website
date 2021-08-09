import React from "react";

const carousel = () => {
	return (
        <section className="clients_logo_area section-padding w-100">
            <div className="container">
                <div className="clients_slider owl-carousel">
                    <div className="item">
                        <img src="images/clients-logo/c-logo-1.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/clients-logo/c-logo-2.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/clients-logo/c-logo-3.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/clients-logo/c-logo-4.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/clients-logo/c-logo-5.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default carousel;
