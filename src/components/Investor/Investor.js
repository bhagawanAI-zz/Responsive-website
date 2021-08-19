import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {Link} from "react-router-dom";

const investor = () => {
	return (
        <section id="coming-soon">
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex flex-column align-items-center">
                    <h1>Coming Soon</h1>
                    <h2>We're working hard to improve our website and we'll ready to launch soon</h2>

                    <div className="subscribe">
                        <Link to='/' className="button bg">
                            Home
                        </Link>
                    </div>
                </div>
            </header>

            <div>
                <ScrollToTop smooth/>
            </div>
        </section>
	);
};

export default investor;
