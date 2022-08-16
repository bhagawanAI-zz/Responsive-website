import React, {useState} from "react";
import {Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="fixed-top non-fixed">
            <div className="navbar-area sticky-black bg-white is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <Link to="/" onClick={() => {window.location.href="/"}} className="mobile-brand d-flex align-items-center justify-content-start">
                            <img src="images/index/idea.png" alt="logo" className="logo" width="40"/>
                            <img src="images/index/text-logo.png" alt="logo" className="logo logo-image"/>
                        </Link>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand d-flex align-items-center justify-content-start"
                                  to="/" onClick={() => {window.location.href="/"}}>
                                <img src="images/index/idea.png" alt="logo" className="logo" width="40"/>
                                <img src="images/index/text-logo.png" alt="logo" className="logo logo-image"/>
                            </Link>
                            <div className="collapse navbar-collapse mean-menu d-block" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/"
                                              onClick={() => {window.location.href="/"}}
                                              className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products"
                                              className="nav-link">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/solutions"
                                              className="nav-link">Solutions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/career"
                                              className="nav-link">Career</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact"
                                              className="nav-link">Contact Us</Link>
                                    </li>
                                    <li className="nav-item login-btn">
                                        <Link to="/signin"
                                              className="nav-link">Login</Link>
                                    </li>
                                    <li className="user-profile-icon">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                B
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="">
                                                <Dropdown.Item className="pl-2" href="/my-profile">
                                                    <i className="mdi mdi-account-outline"/> My Profile</Dropdown.Item>

                                                <Dropdown.Item className="pl-2" onClick={handleShow}>
                                                    <i className="mdi mdi-logout"/> Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <Modal show={show}
                   onHide={handleClose}
                   backdrop="static"
                   keyboard={false}>
                <Modal.Body>
                    <div className="col-12 px-0 pb-3 text-center">
                        <img src="images/index/confirm.png" alt="" style={{width: "60px"}} className="mr-2"/>
                    </div>

                    <div className="col-12 px-0 pt-2">
                        <p className="mb-0 text-center">
                            Are you sure want to Logout?
                        </p>
                    </div>

                    <div className="col-12 px-0 pt-3 text-center">
                        <button className="btn btn-default shadow-sm"
                                type="button"
                                style={{width: "100px"}}
                                onClick={handleClose}>
                            No
                        </button>

                        <button className="btn main-btn shadow-sm ml-3"
                                type="button"
                                style={{width: "100px"}}>
                            Yes
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Navbar;
