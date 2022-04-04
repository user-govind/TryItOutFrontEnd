import { AddBoxOutlined } from "@material-ui/icons";
import axios from "axios";
import React from "react";

export default function Otpcheck() {
  let send = async () => {
    let rep = await axios.get(
      "http://localhost:8080/send-OTP/kulkarnigovind990@gmail.com"
    );
    console.log(rep);
  };
  return (
    <div>
      <button className="btn w-100 btn-danger btn-lg" onClick={send}>
        click
      </button>
    </div>
  );
}
