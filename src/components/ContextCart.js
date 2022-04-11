import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import Arrow from "../Images/arrow.png";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ContextCart = () => {
  const { item, totalItem, totalAmount } = useContext(CartContext);

  let clearCart = () => {
    let body = {
      userCartId: JSON.parse(sessionStorage.getItem("CartId")),
    };
    axios.put(`http://localhost:8080/clear-cart`, body).then((response) => {
      console.log("empty cart!");
    });
  };

  console.log(totalAmount);

  let cid = JSON.parse(sessionStorage.getItem("CartId"));

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

  let UpdateProductVisiblity = async () => {
    let res = await (
      await axios.get("http://localhost:8080/update-User-Cart-checkout/" + cid)
    ).data;
    console.log(res);
  };

  let resBody = {
    paymentId: "",
    orderId: "",
    signature: "",
    amount: totalAmount,
    status: "",
    userId: JSON.parse(sessionStorage.getItem("UserId")),
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  let PaymentRecord = async () => {
    let url = "http://localhost:8080/order-payment";

    console.log(resBody);
    let res = await axios.post(url, resBody);

    console.log(res.data);
  };

  let payNow = async (e) => {
    e.preventDefault();
    if (totalAmount == "" || totalAmount < 0) {
      Swal.fire("Enter Valid Amount", "Total mount is not valid", "question");
    } else {
      let body = {
        id: cid,
        amount: totalAmount,
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
            Swal.fire({
              icon: "success",
              title: "Ordered :)",
              text: "Thank you for shopping!! Your product is on the way ",
            });
            PaymentRecord();
            UpdateProductVisiblity();
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
          Swal.fire({
            icon: "error",
            title: "Payment unsuccefull :(",
            text: "Try again!! Don't worry if amount is deducted we will refund you. Maybe",
          });
          PaymentRecord();
        });

        rzp1.open();
      }
    }
  };

  if (item.length === 0) {
    return (
      <>
        <header className="headerclass">
          <div className="continue-shopping">
            <img
              src={require("../Images/arrow.png")}
              alt=""
              className="arrow-icon"
            />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src={require("../Images/cart.png")} alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header className="headerclass mt1">
        <div className="continue-shopping">
          <img
            src={require("../Images/arrow.png")}
            alt="arrow"
            className="arrow-icon"
          />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src={require("../Images/cart.png")} alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button onClick={payNow}>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
