import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container box_1620">
                        <a href='/' className="navbar-brand logo_h d-flex">
                            {/*<img src="images/logo.png" alt="" width={50}/>*/}
                            SMARTTRAK
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/services'>
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">
                                        About Us
                                    </Link>
                                </li>
                            </ul>

                            {/*<ul className="navbar-right mb-0">
                                <li className="nav-item">
                                    <button className="button button-header bg">Sign up</button>
                                </li>
                            </ul>*/}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default navbar;
