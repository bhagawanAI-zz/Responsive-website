import React from "react";
import {Link} from "react-router-dom";

const career = () => {
	return (
        <section id="coming-soon">
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h1>Coming Soon</h1>
                <h2 className="my-5">We're working hard to improve our website and we'll ready to launch soon</h2>

                <div className="subscribe utton-group button-group-animated">
                    <Link to='/' onClick={() => {window.location.href="/"}} className="btn main-btn">
                        Home
                    </Link>
                </div>
            </div>
        </section>
	);
};

export default career;
