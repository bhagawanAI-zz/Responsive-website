import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LoginService } from '../../services/LoginService';
import "../../styles/login-signup.scss";

const loginService = new LoginService();

const LoginModal = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false
  })

  const handleChange = (val, key) => {
    setData((prevState) => ({
      ...prevState,
      [key]: val
    }))
    setError((prevState) => ({
      ...prevState,
      [key]: false
    }))
  }

  const handleLogin = async () => {
    try{
    let tempError = {};
    let errorFlag = false;
    Object.keys(data).forEach((item) => {
      if (!data[item]) {
        tempError[item] = true;
        errorFlag = true
      }
    });
    if (!errorFlag) {
      const reqData = {
        email : data.email,
        password : data.password
      }
      const res = await loginService.login(reqData);
      if(res.status===200){
        let resData = res.data;
        console.log("login res data", resData);
        localStorage.setItem("authToken", resData.token);
        alert("Login successful");
        props.onLoginSuccess();
      }
      // console.log("In login success", data)
    } else {
      setError((prevState) => ({
        ...prevState,
        ...tempError
      }))
    }
  }catch(err){
    alert("Error while loggin in. Try again !");
  }
}

  const getInputClassName = (field) => {
    return error[field] ? "custom-form-input error-form-input" : "custom-form-input"
  }

  return (
    <>
      <Modal show={true} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN TO YOUR ACCOUNT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <input type="checkbox" id="remember-me" />
            <div className="custom-form-label" style={{ marginLeft: 10 }}>Remember Me</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: "98%", marginTop: 10 }}
            variant="primary"
            onClick={handleLogin}>
            Login
          </Button>
          <div className='row-aligned' style={{ justifyContent: "space-between",width :"100%" }}>
            <div className="row-aligned">
              <div className="custom-form-label">Need an Account ?</div>
              <div className="custom-form-label"
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => props.onRegisterClick()}>Register</div>
            </div>
            <div className="custom-form-label" style={{cursor:"pointer"}}
              onClick={() => props.onForgetClick()}>Forget Password</div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;