import React, {useState} from "react";
import {Link} from "react-router-dom";

const Signup = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    };
    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text");
            return;
        }
        setPasswordType("password")
    };

    return (
        <section>
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-center mt-5">
                    <div className="col-lg-5 col-md-8 py-4 mt-5">
                        <form className="form-signin rounded-sm shadow">
                            <h4>SIGN UP</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="">First Name</label>
                                    <input type="text"
                                           id="firstName"
                                           className="form-control mb-3"
                                           required/>
                                </div>
                                <div className="col-md-6">
                                    <label className="">Last Name</label>
                                    <input type="text"
                                           id="lastName"
                                           className="form-control mb-3"
                                           required/>
                                </div>
                            </div>

                            <div id="login" className="container p-0">
                                <label className="">Email</label>
                                <input type="email"
                                       id="inputEmail"
                                       className="form-control mb-3"
                                       required/>

                                <label className="">Password</label>
                                <div className="input-group p-0 mb-2">
                                    <input type={passwordType}
                                           onChange={handlePasswordChange}
                                           value={passwordInput}
                                           name="password"
                                           className="form-control"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default border" onClick={togglePassword}>
                                            {passwordType === "password" ? <i className="mdi mdi-eye-off"/> :
                                                <i className="mdi mdi-eye"/>}
                                        </button>
                                    </div>
                                </div>

                                <button className="btn btn-lg btn-block main-btn mt-3" type="submit">SIGN UP</button>

                                <p className="mt-2 mb-0 text-muted small">
                                    Already have an Account? <Link to="/signin"
                                                            className="brand-link">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
