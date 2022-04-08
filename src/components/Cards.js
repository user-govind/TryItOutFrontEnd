import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
export default function Card() {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    let cartId = JSON.parse(sessionStorage.getItem("CartId"));
    console.log(cartId);

    let url = "http://localhost:8080/your-orders/" + cartId;
    let res = await axios.post(url, {});

    setOrders(res.data);
  }, []);

  return (
    <>
      <a href="#" class="card-link" style={{ margin: 15 }}>
        Orders
      </a>
      <a href="#" class="card-link" style={{ margin: 15 }}>
        Buy Again
      </a>
      <a href="#" class="card-link" style={{ margin: 15 }}>
        Not Yet Shipped
      </a>
      <a href="#" class="card-link" style={{ margin: 15 }}>
        Cancelled Orders
      </a>
      {orders.map((item, index) => (
        <div class="card col-8 my-5 mx-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 p-0 m-0 card-header">
                <span style={{ margin: 15 }}>Order Placed </span>
                <span style={{ margin: 5 }}>{item.paymentDate} </span>
              </div>
              <div className="col-6 p-0 m-0 card-header">
                <span>Total : $ {item.amount}</span>
              </div>
              <div className="col-3 p-0 m-0 card-header">
                <h6>{item.orderId}</h6>
                <span>View Order Details </span>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              Status: <span className="text-success"> {item.status}</span>
            </h5>
            <p class="card-text">
              Your order will be refunded within two working days, if your
              request is not successful.
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-2">
                  <img
                    src={"http://" + item.productImg}
                    class="img-fluid"
                    width={250}
                    height={200}
                    alt="..."
                  />
                </div>
                <div className="col-6">
                  <b>{item.brand}</b>
                  <p>{item.productName}</p>
                  <p>Size : {item.size}</p>
                  <button className="btn btn-primary">Buy Again</button>
                </div>
                <div className="col-3">Color : {item.colour}</div>
              </div>
            </div>
            <div class="card-footer">
              <small class="text-dark">Archive order</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
