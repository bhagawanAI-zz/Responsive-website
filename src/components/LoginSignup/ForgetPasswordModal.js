import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/login-signup.scss"

const ForgetPasswordModal = (props) => {
  const [data, setData] = useState({
    email: "",
  });
  const [error, setError] = useState({
    email: false,
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

  const handleSubmit = () => {
    let tempError = {};
    let errorFlag = false;
    Object.keys(data).forEach((item) => {
      if (!data[item]) {
        tempError[item] = true;
        errorFlag = true
      }
    });
    if (!errorFlag) {
      console.log("In forgte success", data)
    } else {
      setError((prevState) => ({
        ...prevState,
        ...tempError
      }))
    }
  }

  const getInputClassName = (field) => {
    return error[field] ? "custom-form-input error-form-input" : "custom-form-input"
  }

  return (
    <>
      <Modal show={true} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>FORGET PASSWORD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="custom-form-field">
            <div className="custom-form-label">Enter your registered Email ID for resetting password</div>
            <input className={getInputClassName("email")}
              type="email"
              value={data.email}
              onChange={(e) => handleChange(e.target.value, "email")} />
            {error.email && <div className="error-text-message">Invalid Email</div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: "98%", marginTop: 10 }}
            variant="primary"
            onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ForgetPasswordModal;