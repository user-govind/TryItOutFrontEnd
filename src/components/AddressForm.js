import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const steps = ["Shipping address"];

function getStepContent(step) {
  switch (step) {
  }
}

const theme = createTheme();

export default function Checkout() {
  let navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  let [isDefault, setisDefault] = useState();

  let resBody = {
    paymentId: "",
    orderId: "",
    signature: "",
    amount: JSON.parse(sessionStorage.getItem("amount")),
    status: "",
    userId: JSON.parse(sessionStorage.getItem("UserId")),
  };

  let PaymentRecord = async () => {
    let url = "http://localhost:8080/order-payment";

    console.log(resBody);
    let res = await axios.post(url, resBody);

    console.log(res.data);
  };

  let BuyNow = async () => {
    console.log("buynow called");

    let url = "http://localhost:8080/add-product-cart";
    let body = {
      productid: JSON.parse(sessionStorage.getItem("productBuyId")),
      quantity: JSON.parse(sessionStorage.getItem("quantity")),
      userid: JSON.parse(sessionStorage.getItem("UserId")),
      colour: JSON.parse(sessionStorage.getItem("colour")),
      size: JSON.parse(sessionStorage.getItem("size")),
      status: "Bought",
    };

    try {
      let res = await axios.post(url, body);
      if (res.data) {
        Swal.fire({
          icon: "success",
          title: "Ordered :)",
          text: "Thank you for shopping!! Your product is on the way ",
        });
        navigate("/home");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Payment unsuccefull :(",
        text: "Try again!! Don't worry if amount is deducted we will refund you. Maybe",
      });
    }
  };

  let payNow = async () => {
    console.log("payment initiated");
    let body = {
      id: JSON.parse(sessionStorage.getItem("CartId")),
      amount: JSON.parse(sessionStorage.getItem("amount")),
    };
    let res = await axios.post("http://localhost:8080/create-order", body);

    if (res.data.status == "created") {
      let options = {
        key: "rzp_test_0ANxMyDNRQqqnh",
        currency: "INR",
        amount: res.data.amount,
        name: "Welcome to tryitout",
        description: "Test Wallet Transaction",
        image: require("../Images/tryitouttranslogo.png"),
        order_id: res.data.orderId,
        handler: function (response) {
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_signature);

          resBody.signature = response.razorpay_signature;
          resBody.paymentId = response.razorpay_payment_id;
          resBody.orderId = response.razorpay_order_id;
          resBody.status = "Success";
          PaymentRecord();

          BuyNow();
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "tryitout",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        resBody.status = "Failed";
        PaymentRecord();
      });

      rzp1.open();
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = formRef.current.reportValidity();
    console.log(isDefault);
    let body = {
      address1: values.address1,
      address2: values.address2,
      city: values.city,
      state: values.state,
      firstName: values.firstName,
      lastName: values.lastName,
      zip: values.zip,
      country: values.country,
      isDefault: isDefault,
      uid: JSON.parse(sessionStorage.getItem("UserId")),
    };
    if (isValid) {
      let res;
      try {
        res = await axios.post("http://localhost:8080/add-User-Address", body);

        if (res.data) {
          Swal.fire({
            icon: "info",
            title: "New address is added",
            text: "You will recive order on this address",
          });
        } else {
          Swal.fire({
            icon: "info",
            title: "Address already exists",
            text: "You will recive order on existing address",
          });
        }

        payNow();
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Address is Invalid",
          text: "Plese Enter a valid address so that we know where to deliver :)",
        });
      }
    }
  };
  const [values, setValues] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    firstName: "",
    lastName: "",
    zip: "",
    country: "",
    uid: JSON.parse(sessionStorage.getItem("UserId")),
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const formRef = React.useRef();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <form ref={formRef}>
            <Typography component="h1" variant="h4" align="center">
              Shipping address
            </Typography>

            <React.Fragment>
              <Typography variant="h6" gutterBottom></Typography>
              <Grid container spacing={3} marginTop={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="secondary"
                        name="isDefault"
                        value="true"
                        onClick={() => {
                          isDefault = isDefault
                            ? setisDefault(false)
                            : setisDefault(true);
                        }}
                      />
                    }
                    label="Use this address for payment details"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="Submit"
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </React.Fragment>
          </form>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
