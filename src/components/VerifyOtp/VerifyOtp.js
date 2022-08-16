import React, {useState} from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";

const VerifyOtp = () => {
    const [OTP, setOTP] = useState("");

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
                            <h4>VERIFY OTP</h4>
                            <div id="login" className="container p-0">
                                <label className="small">OTP has been sent to your registered Email ID</label>

                                <p className="mb-0 mt-1">Enter OTP</p>
                                <OTPInput value={OTP}
                                          className="otp-input"
                                          onChange={setOTP}
                                          autoFocus
                                          OTPLength={4}
                                          otpType="number"
                                          disabled={false}
                                          secure/>
                                <ResendOTP className="mt-3" handelResendClick={() => console.log("Resend clicked")} />

                                <button className="btn btn-lg btn-block main-btn mt-3" type="submit" onClick={handleShow}>VERIFY</button>
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
                                Your OTP successfully verified!
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

export default VerifyOtp;
