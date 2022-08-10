import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { LoginService } from '../../services/LoginService';
import "../../styles/login-signup.scss";

const loginService = new LoginService();

const VerifyEmailModal = (props) =>  {
  const {signupData} = props;
  const [data,setData] = useState({
    otp : "",
  });
  const [error,setError] = useState({
    otp: false
  });

  const handleChange = (val, key) => {
    setData((prevState) => ({
      ...prevState,
      [key] : val
    }))
  }

  const getInputClassName = (field) => {
    return error[field] ? "custom-form-input error-form-input" : "custom-form-input"
  }

  const handleVerify = async () => {
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
        const reqData = {
            id : signupData._id,
            email :signupData.email,
            otp : data.otp
        }
        const res = await loginService.verifyEmail(reqData);
        if(res.status===200){
            const resData = res.data;
            console.log("In verify email response",resData)
            alert("Email has been verified successfully");
            localStorage.setItem("authToken",resData.token);
            props.onVerifyEmailSuccess();
        }
    //   console.log("In verify otp",data)
    }else{
      setError((prevState) => ({
        ...prevState,
        ...tempError
      }))
    }
  }catch(err){
    alert("Error while verifying email. Try again!")
  }
}

  return (
    <>
      <Modal show={true} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>VERIFY OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="custom-form-label">OTP has been sent to ypur registered Email ID</div>
            <div className="custom-form-field">
                <div className="custom-form-label">Enter OTP</div>
                <input className={getInputClassName("otp")}
                    type="number"
                    value={data.otp}
                    onChange={(e) => handleChange(e.target.value, "otp")} />
                {error.otp && <div className="error-text-message">Invalid OTP</div>}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleVerify}>
            Verify OTP
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VerifyEmailModal;