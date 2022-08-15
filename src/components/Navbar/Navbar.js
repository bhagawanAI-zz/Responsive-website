import React, { useState } from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import LoginModal from "../LoginSignup/LoginModal";
import SignupModal from "../LoginSignup/SignupModal";
import VerifyEmailModal from "../LoginSignup/VerifyEmailModal";
import ForgetPasswordModal from "../LoginSignup/ForgetPasswordModal";

const Navbar = () => {
    const history = useHistory();
    const [showLogin, setShowLogin]= useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showVerifyEmail, setShowVerifyEmail] = useState(false);
    const [showForgetModal, setShowForgetModal] = useState(false);
    const [signupData,setSignupData] = useState({});

    const handleLoginClick = () => {
        setShowSignup(false);
        setShowLogin(true)
    }

    const handleRegisterClick = () => {
        setShowLogin(false);
        setShowSignup(true);
    }

    const handleForgetClick = () => {
        setShowLogin(false);
        setShowForgetModal(true)
    }

    const handleSignupSuccess = (data) => {
        setShowSignup(false);
        setSignupData(data);
        setShowVerifyEmail(true);
    }

    const handleLoginSuccess = () => {
        setShowLogin(false);
        history.push("/dashboard");
    }

    const handleVerifyEmailnSuccess = () => {
        setShowVerifyEmail(false);
        history.push("/dashboard");
    }

    return (
        <>
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
                                        <Link to="/aboutus" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/solutions"
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
                                    <Button style={{height : 39,width : 118}} 
                                        variant="primary"
                                        onClick={() => setShowLogin(true)}>Login</Button>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {showLogin && <LoginModal onRegisterClick={handleRegisterClick} 
                     onForgetClick={handleForgetClick}
                     onClose={() => setShowLogin(false)} 
                     onLoginSuccess={handleLoginSuccess} />}
        {showSignup && <SignupModal onLoginClick={handleLoginClick}
            onClose={() => setShowSignup(false)}
            onSignupSuccess={handleSignupSuccess} />}
        {showVerifyEmail && <VerifyEmailModal onClose={() => setShowVerifyEmail(false)} 
            signupData={signupData}
            onVerifyEmailSuccess={handleVerifyEmailnSuccess} />}
        {showForgetModal && <ForgetPasswordModal onClose={() => setShowForgetModal(false)} />}
        </>
    );
};

export default Navbar;
