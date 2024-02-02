import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FormInput = ({ label, name, placeholder, type, value, onChange, error }) => (
  <div className="inputContainer">
    <label htmlFor={name} className="lab">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
    {error && <p className="error">{error}</p>}
  </div>
);

const Forms = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formSubmit, setFormSubmit] = useState(false);

  const validate = (data) => {
    let error = {};
    if (data.firstName.trim() === "") {
      error.firstName = "enter your First name";
    }
    if (data.lastName.trim() === "") {
      error.lastName = "enter your last name";
    }
    if (data.email.trim() === "") {
      error.email = " enter your Email-Id";
    }
    if (data.password.trim() === "") {
      error.password = "enter your Password";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(data);
    if (Object.keys(errors).length === 0) {
      toast("You have registered successfully!");
      setFormSubmit(true);
    }
  };

  const handleInput = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="parent">
      <form onSubmit={handleSubmit} className="form">
        <div className="message">
          {formSubmit && <p className="successMessage">Registration Success++!</p>}
        </div>
        <FormInput
          label="Enter your first name"
          name="firstName"
          placeholder="First Name"
          type="text"
          value={data.firstName}
          onChange={handleInput}
          error={data.firstName.trim() === "" && "enter your First name"}
        />

        <FormInput
          label="Enter your last name"
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={data.lastName}
          onChange={handleInput}
          error={data.lastName.trim() === "" && "enter your last name"}
        />

        <FormInput
          label="Enter your email"
          name="email"
          placeholder="Email"
          type="email"
          value={data.email}
          onChange={handleInput}
          error={data.email.trim() === "" && "enter your Email-Id"}
        />

        <FormInput
          label="Enter Your password"
          name="password"
          placeholder="Enter Your password"
          type="password"
          value={data.password}
          onChange={handleInput}
          error={data.password.trim() === "" && "enter your Password"}
        />
        <input type="done" value="Register" className="submitButton" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Forms;
