import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LoginService } from '../../services/LoginService';

const loginService = new LoginService();

const SignupModal = (props) =>  {
  const [data,setData] = useState({
    firstName: "",
    lastName : "",
    email : "",
    password : "",
  });
  const [error,setError] = useState({
    firstName: false,
    lastName : false,
    email : false,
    password : false
  })


  const handleSignup = async () => {
    try{
    let tempError = {};
    let errorFlag = false;
    Object.keys(data).forEach((item) => {
      if(!data[item]){
        tempError[item] = true;
        errorFlag = true
      }
    });
    if(!errorFlag){
      let reqData = {
        first_name : data.firstName,
        last_name : data.lastName,
        email : data.email,
        password : data.password
      }
      const res = await loginService.signup(reqData);
      if(res.status===201){
        const resData = res.data;
        alert(`OTP has been sent on ${data.email}`);
        props.onSignupSuccess(resData);
      }
      // console.log("In signup success ash",data)
    }else{
      setError((prevState) => ({
        ...prevState,
        ...tempError
      }))
    }
  }catch(err){
    alert("Error while signing up. Try again !")
  }
}

  const handleChange = (val, key) => {
    setData((prevState) => ({
      ...prevState,
      [key] : val
    }))
    setError((prevState) => ({
      ...prevState,
      [key] : false
    }))
  }

  const getInputClassName = (field) => {
    return error[field] ? "custom-form-input error-form-input" : "custom-form-input"
  }

  return (
    <>
      <Modal show={true} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row-aligned' style={{width:"97%"}}>
            <div className="custom-form-field" style={{width:"50%"}}>
                <div className="custom-form-label">First Name</div>
                <input className={getInputClassName("firstName")}
                    type="text"
                    value={data.firstName}
                    onChange={(e) => handleChange(e.target.value, "firstName")} />
                {error.firstName && <div className="error-text-message">Invalid First Name</div>}
            </div>
            <div className="custom-form-field" style={{width:"50%"}}>
                <div className="custom-form-label">Last Name</div>
                <input className={getInputClassName("lastName")}
                    type="text"
                    value={data.lastName}
                    onChange={(e) => handleChange(e.target.value, "lastName")} />
                {error.lastName && <div className="error-text-message">Invalid Last Name</div>}
            </div>
            </div>
            <div className="custom-form-field">
                <div className="custom-form-label">Email</div>
                <input className={getInputClassName("email")}
                    type="email"
                    value={data.email}
                    onChange={(e) => handleChange(e.target.value, "email")} />
                {error.email && <div className="error-text-message">Invalid Email</div>}
            </div>
            <div className="custom-form-field">
                <div className="custom-form-label">Password</div>
                <input className={getInputClassName("password")}
                    type="password"
                    value={data.password}
                    onChange={(e) => handleChange(e.target.value, "password")} />
                {error.password && <div className="error-text-message">Invalid Password</div>}
            </div>
            <div className="row-aligned custom-form-field">
                <div className="custom-form-label">Already have an Account ?</div>
                <div className="custom-form-label" 
                  style={{color : "blue", cursor:"pointer"}}
                  onClick={() => props.onLoginClick()}>Login</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{width : "98%",marginTop :10}}
             variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupModal;