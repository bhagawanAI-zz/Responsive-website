import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Toast from 'react-bootstrap/Toast';

const MyProfile = () => {
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

    const [showProfileToast, setShowProfileToast] = useState(true);
    const [showPasswordToast, setShowPasswordToast] = useState(true);

    return (
        <section>
            <div className="col-12">
                <div className="alert-block">
                    <Toast onClose={() => setShowProfileToast(false)} show={showProfileToast} delay={3000} autohide>
                        <Toast.Body><i className="mdi mdi-check-circle-outline f-18 align-middle mr-2"/>
                            Profile information successfully submitted!</Toast.Body>
                    </Toast>

                    <Toast onClose={() => setShowPasswordToast(false)} show={showPasswordToast} delay={3000} autohide>
                        <Toast.Body><i className="mdi mdi-check-circle-outline f-18 align-middle mr-2"/>
                            Password has been updated successfully!</Toast.Body>
                    </Toast>
                </div>
            </div>

            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container bg-white shadow-sm">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-3">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start mb-1 mt-3">
                                    <h5 className="border-bottom pb-2">Basic Information <i className="mdi mdi-pencil f-18 float-right"/> </h5>
                                </div>
                                <div className="about-content">
                                    <p className="mb-2"><b>Name:</b> Alex Pandian</p>
                                    <p className="mb-2"><b>Email ID:</b> alexpandian123@gmail.com</p>
                                    <p className="mb-2"><b>Mobile Number:</b> +91-875634567</p>
                                    <p className="mb-2"><b>Address:</b> Radiant Silver Bell, Block 2, A1-001, Banglore, Karnataka, 560064, India</p>
                                </div>

                                <div className="section-title section-title-left text-start mb-1 mt-4">
                                    <h5 className="border-bottom pb-2">About Me</h5>
                                </div>
                                <div className="about-content">
                                    <p className="mb-0">#iExperiment is a small project, built for future asset storage. On this website you can find the projects I have been working on and my contact information.

                                        I have a huge passion for web development and programming. I love to learn and thrive from challenges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container bg-white shadow-sm">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-3">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start mb-1 mt-3">
                                    <h5 className="border-bottom pb-2">Update Information</h5>
                                </div>
                                <div className="about-content">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label className="">First Name*</label>
                                            <input type="text"
                                                   id="firstName"
                                                   className="form-control mb-4"
                                                   required autoFocus/>
                                        </div>

                                        <div className="col-md-4">
                                            <label className="">Last Name*</label>
                                            <input type="text"
                                                   id="lastName"
                                                   className="form-control mb-4"
                                                   required/>
                                        </div>

                                        <div className="col-md-4">
                                            <label className="">Email ID*</label>
                                            <input type="email"
                                                   id="emailId"
                                                   className="form-control mb-4"
                                                   required/>
                                        </div>

                                        <div className="col-md-4">
                                            <label className="">Mobile Number</label>
                                            <InputGroup className="mb-0 p-0">
                                                <DropdownButton className="p-0 border-1"
                                                                variant="outline-default"
                                                                title="91"
                                                                id="input-group-dropdown-1">
                                                    <Dropdown.Item href="#">91</Dropdown.Item>
                                                    <Dropdown.Item href="#">81</Dropdown.Item>
                                                    <Dropdown.Item href="#">71</Dropdown.Item>
                                                </DropdownButton>
                                                <Form.Control aria-label="Text input with dropdown button" />
                                            </InputGroup>
                                        </div>

                                        <div className="col-md-8">
                                            <label className="">Address</label>
                                            <input type="text"
                                                   id="address"
                                                   className="form-control mb-4"
                                                   required/>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="">About Me</label>
                                            <textarea className="form-control mb-4" required/>
                                        </div>

                                        <div className="col-md-12 text-right mb-1">
                                            <button className="btn btn-default shadow-sm"
                                                    type="button"
                                                    style={{width: "100px"}}>
                                                Cancel
                                            </button>

                                            <button className="btn main-btn shadow-sm ml-3"
                                                    type="button"
                                                    style={{width: "100px"}}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container bg-white shadow-sm mt-3">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-2">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start mb-1 mt-3">
                                    <h5>Change Password <i className="mdi mdi-pencil f-18 float-right"/> </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container bg-white shadow-sm mt-3">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-2">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start mb-1 mt-3">
                                    <h5 className="border-bottom pb-2">Change Password</h5>
                                </div>
                                <div className="about-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="">New Password*</label>
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
                                        </div>

                                        <div className="col-md-6">
                                            <label className="">Confirm Password*</label>
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
                                        </div>

                                        <div className="col-md-12 text-right mb-2">
                                            <button className="btn btn-default shadow-sm"
                                                    type="button"
                                                    style={{width: "100px"}}>
                                                Cancel
                                            </button>

                                            <button className="btn main-btn shadow-sm ml-3"
                                                    type="button"
                                                    style={{width: "100px"}}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;
