import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import "../stylesheets/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/login";

    let user = await axios.post(url, values);
    console.log(user.data);
    if (user != null) {
      sessionStorage.setItem("UserId", JSON.stringify(user.data.userId));
      navigate("/home");
    } else navigate("login");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="appl my-0">
      <form className="forml" onSubmit={handleSubmit}>
        <h1 className="logh1">Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="logbutton">Login</button>
        <p className="my-0 w-100 text-center">
          {" "}
          New User? <Link to="/register"> Create an account</Link>
        </p>
      </form>
    </div>
  );
}
