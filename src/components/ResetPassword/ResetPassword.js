import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";

const ResetPassword = () => {
    const [newPasswordType, setNewPasswordType] = useState("password");
    const [newPasswordInput, setNewPasswordInput] = useState("");
    const handleNewPasswordChange =(evnt)=>{
        setNewPasswordInput(evnt.target.value);
    };

    const toggleNewPassword =(e)=>{
        e.preventDefault();
        if(newPasswordType==="password")
        {
            setNewPasswordType("text");
            return;
        }
        setNewPasswordType("password")
    };

    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const handleConfirmPasswordChange =(evnt)=>{
        setConfirmPasswordInput(evnt.target.value);
    };

    const toggleConfirmPassword =(e)=>{
        e.preventDefault();
        if(confirmPasswordType==="password")
        {
            setConfirmPasswordType("text");
            return;
        }
        setConfirmPasswordType("password")
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => setShow(true);
    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <section>
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-center mt-5">
                    <div className="col-lg-5 col-md-8 py-4 mt-5">
                        <form className="form-signin rounded-sm shadow" onSubmit={handleSubmit}>
                            <h4>RESET PASSWORD</h4>
                            <div id="login" className="container p-0">
                                <label className="">New Password</label>
                                <div className="input-group p-0 mb-2">
                                    <input type={newPasswordType}
                                           onChange={handleNewPasswordChange}
                                           value={newPasswordInput}
                                           name="password"
                                           className="form-control"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default border" onClick={toggleNewPassword}>
                                            {newPasswordType === "password" ? <i className="mdi mdi-eye-off"/> :
                                                <i className="mdi mdi-eye"/>}
                                        </button>
                                    </div>
                                </div>

                                <label className="">Confirm Password</label>
                                <div className="input-group p-0 mb-4">
                                    <input type={confirmPasswordType}
                                           onChange={handleConfirmPasswordChange}
                                           value={confirmPasswordInput}
                                           name="password"
                                           className="form-control"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default border" onClick={toggleConfirmPassword}>
                                            {confirmPasswordType === "password" ? <i className="mdi mdi-eye-off"/> :
                                                <i className="mdi mdi-eye"/>}
                                        </button>
                                    </div>
                                </div>

                                <button className="btn btn-lg btn-block main-btn" type="submit" onClick={handleShow}>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <div className="col-12 px-0 pb-3 text-center">
                            <img src="images/index/checked.png" alt="" style={{width: "60px"}} className="mr-2"/>
                        </div>

                        <div className="col-12 px-0 pt-3">
                            <p className="mb-0 text-center">
                                Your password has been changed successfully!
                            </p>
                        </div>

                        <div className="col-12 px-0 pt-3">
                            <p className="mb-0 text-center">Click here to <Link to="/signin"
                                                  className="brand-link">Login</Link></p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </section>
    );
};

export default ResetPassword;
