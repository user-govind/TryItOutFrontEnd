import React from "react";
import "../App.css";
import FormInput from "./FormInput";
import { useState, useEffect } from "react";
import "../stylesheets/Register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../stylesheets/FormInput.css";
import Swal from "sweetalert2";
import { encrypt } from "./EncryptDecrypt";

export default function Register() {
  let navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  });

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    mobile: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const inputs = [
    {
      id: 1, //added newly
      name: "FirstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be between 3 to 16 characters and shouldn't include any special character,number!", //change 1-april
      label: "First Name",
      pattern: "^[A-Za-z]{3,16}$", //change 1-april
      required: true,
    },
    {
      id: 2, //added newly        // change 1-april
      name: "LastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character,number!",
      label: "Last Name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 3, //added newly      //change 1-april
      name: "MobileNumber",
      type: "text",
      placeholder: "MobileNumber",
      errorMessage: "MobileNumber should be valid Indian Mobile Number",
      label: "Mobile Number",
      pattern: "^[7-9][0-9]{9}$", //MobileNumber should be of 10 characters and should starts from 7/8/9 (Indian Mobile No.)
      // pattern: "^[0-9]{10}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userEncyptPass = encrypt(values.password);
    values.password = userEncyptPass;
    sessionStorage.setItem("User", JSON.stringify(values));
    sessionStorage.setItem("UserProfile", JSON.stringify(selectedFile));

    console.log(values.email);
    let res;
    if (
      (res = (await axios.get("http://localhost:8080/send-OTP/" + values.email))
        .data)
    ) {
      console.log(res);
      navigate("/otpbox");
    } else
      Swal.fire(
        "Enter Valid Details",
        "Please check and proceed again",
        "error"
      );
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="app">
        <form className="regform" onSubmit={handleSubmit}>
          <h1 className="regh1">Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="regbutton">Register</button>
          <p className="my-0 w-100 text-center p-2">
            {" "}
            Already registered? <Link to="/"> Login here</Link>
          </p>
        </form>
        {/* <form className="regform" onSubmit={upload}>
          <label htmlFor="">Upload your profile pic</label>
          <br></br>
          <input className="formInput" type="file" onChange={getFile} />
          <div>
            <button className="regbutton">Upload</button>
          </div>
         
        </form> */}
      </div>
    </>
  );
}
