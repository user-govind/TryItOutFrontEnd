import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import Swal from "sweetalert2";
export default function RazorPay() {
  const [amount, setamount] = useState();

  let resBody = {
    paymentId: "",
    orderId: "",
    signature: "",
    amount: amount,
    status: "",
    userId: JSON.parse(sessionStorage.getItem("UserId")),
  };

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

  let changeHandle = (e) => {
    setamount(e.target.value);
  };

  let PaymentRecord = async () => {
    let url = "http://localhost:8080/order-payment";

    console.log(resBody);
    let res = await axios.post(url, resBody);

    console.log(res.data);
  };

  let payNow = async (e) => {
    e.preventDefault();
    if (amount == "")
      Swal.fire("Enter Valid Amount", "Total mount is not valid", "question");
    else {
      console.log("payment initiated");
      let body = {
        id: 1,
        amount: amount,
      };
      let res = await axios.post("http://localhost:8080/create-order", body);
      console.log(res.data);
      if (res.data.status == "created") {
        let options = {
          key: "rzp_test_0ANxMyDNRQqqnh",
          currency: "INR",
          amount: res.data.amount,
          name: "Welcome to tryitout",
          description: "Test Wallet Transaction",
          image:
            "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
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
            alert("Payment succefull!!");
          },
          prefill: {
            name: "govind",
            email: "alsdj@gmail.com",
            contact: "1020304050",
          },
          notes: {
            address: "tryitoutpvtlimted",
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
    }
  };

  return (
    <div className="container h-100">
      <div
        className="row justify-content-center align-content-center"
        style={{ height: "80vh" }}
      >
        <div className="col-6">
          <h1>RazorPay</h1>
          <form
            className="form form-control d-flex flex-column "
            onSubmit={payNow}
          >
            <input
              className="m-5"
              type="text"
              value={amount}
              onChange={changeHandle}
            />

            <input type="submit" value="Checkout" />
          </form>
        </div>
      </div>
    </div>
  );
}
