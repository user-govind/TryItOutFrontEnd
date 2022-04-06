import React from "react";
import "../App.css";
import FormInput from "./FormInput";
import { useState } from "react";
import "../stylesheets/Register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../stylesheets/FormInput.css";

export default function Register() {
  let navigate = useNavigate();
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
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "mobile",
      type: "number",
      placeholder: "MobileNumber",
      errorMessage:
        "MobileNumber should be 10 characters and shouldn't include any special character!",
      label: "Mobile Number",
      pattern: "^[0-9]{10}$",
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

  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem("User", JSON.stringify(values));

    console.log(values.email);
    let res;
    if (
      (res = (await axios.get("http://localhost:8080/send-OTP/" + values.email))
        .data)
    ) {
      console.log(res);
      navigate("/otpbox");
    } else alert("Enter valid details");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const upload = async (e) => {
    e.preventDefault();
    console.log(values.email);
    console.log(values.password);
    let loginData = {
      email: values.email,
      password: values.password,
    };

    const lurl = "http://localhost:8080/login";

    let user = await axios.post(lurl, values);
    console.log(user.data);
    console.log(user.data.userId);
    let userId = parseInt(user.data.userId);
    const formdata = new FormData();

    formdata.append("id", userId);
    formdata.append("profilePic", selectedFile);
    console.log(formdata);
    let url = "http://localhost:8080/upload-profilepic";
    let status = await axios.post(url, formdata);
    console.log(status);
  };

  const getFile = (e) => {
    setSelectedFile(e.target.files[0]);
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
        </form>
        <form className="regform" onSubmit={upload}>
          <label htmlFor="">Upload your profile pic</label>
          <br></br>
          <input className="formInput" type="file" onChange={getFile} />
          <div>
            <button className="regbutton">Upload</button>
          </div>
          <p className="my-0 w-100 text-center p-2">
            {" "}
            Already registered? <Link to="/"> Login here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
