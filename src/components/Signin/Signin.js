import React, {useState} from "react";
import {Link} from "react-router-dom";

const Signin = () => {
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
                            <h4>LOGIN TO YOUR ACCOUNT</h4>
                            <div id="login" className="container p-0">
                                <label className="">Email</label>
                                <input type="email"
                                       id="inputEmail"
                                       className="form-control mb-4"
                                       required autoFocus/>

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

                                <div className="one-line mb-1">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"
                                                   value="remember-me"/> Remember me
                                        </label>
                                    </div>
                                </div>

                                <button className="btn btn-lg btn-block main-btn" type="submit">Login</button>

                                <p className="mt-2 mb-0 text-muted small">
                                    Need an Account?  <Link to="/signup"
                                                            className="brand-link">Register</Link>

                                    <Link to="/forgot-password"
                                          className="brand-link float-end">Forgot password?</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signin;
