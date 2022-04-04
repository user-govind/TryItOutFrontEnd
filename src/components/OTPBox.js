import React, { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const OTPBox = () => {
  let navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  let navigatetoReg = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-content-center hei">
          <div className="col text-center">
            <Card className="" sx={{ minWidth: 275 }}>
              <h3>TryItOut</h3>
              <h1>Verify its you</h1>
              <p>
                To make sure your account is Safe TryItOut want's <br />
                to make sure its you
              </p>
              <CardContent>
                {" "}
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-field"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
                <p>OTP Entered - {otp.join("")}</p>
                <p>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={(e) => setOtp([...otp.map((v) => "")])}
                  >
                    Clear
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={async (e) => {
                      if (otp.join("") > 10000) {
                        let url = "http://localhost:8080/verify-OTP";

                        let body = {
                          otp: otp.join(""),
                          email: JSON.parse(sessionStorage.getItem("User"))
                            .email,
                        };
                        let status = await axios.post(url, body);
                        console.log(status);
                        if (status.data) {
                          if (
                            (
                              await axios.post(
                                "http://localhost:8080/register",
                                JSON.parse(sessionStorage.getItem("User"))
                              )
                            ).data
                          ) {
                            navigatetoReg();
                          }
                        }
                      } else {
                        alert("Enter OTP");
                      }
                    }}
                  >
                    Verify OTP
                  </button>
                </p>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPBox;
