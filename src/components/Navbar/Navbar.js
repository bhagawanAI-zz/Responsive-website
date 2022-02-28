import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <div className="fixed-top non-fixed">
            <div className="navbar-area sticky-black bg-white is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <Link to="/" onClick={() => {window.location.href="/"}} className="mobile-brand">
                            <img src="images/index/logo.png" alt="logo" className="logo logo-image"/>
                        </Link>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand"
                               to="/" onClick={() => {window.location.href="/"}}>
                                <img src="images/index/logo.png" alt="logo" className="logo logo-image"/>
                            </Link>
                            <div className="collapse navbar-collapse mean-menu d-block" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/"
                                              onClick={() => {window.location.href="/"}}
                                           className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/advanced-ai"
                                              className="nav-link">Solutions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/career"
                                              className="nav-link">Career</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact"
                                           className="nav-link">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navbar;
