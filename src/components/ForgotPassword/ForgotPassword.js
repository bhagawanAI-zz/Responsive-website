import React from "react";

const ForgotPassword = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-center mt-5">
                    <div className="col-lg-5 col-md-8 py-4 mt-5">
                        <form className="form-signin rounded-sm shadow">
                            <h4>FORGOT PASSWORD</h4>
                            <div id="login" className="container p-0">
                                <label className="">Enter your registered Email ID for resetting password</label>
                                <input type="email"
                                       id="inputEmail"
                                       className="form-control mb-4"
                                       required autoFocus/>

                                <button className="btn btn-lg btn-block main-btn" type="submit">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
