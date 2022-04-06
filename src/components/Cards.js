import React from "react";
export default function Card() {
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
      <div class="card col-8">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-0 m-0 card-header">
              <span style={{ margin: 15 }}>Order Placed </span>
              <span style={{ margin: 5 }}>3 April 2020 </span>
            </div>
            <div className="col-6 p-0 m-0 card-header">
              <span>Total : Rs 1800</span>
            </div>
            <div className="col-3 p-0 m-0 card-header">
              <h6>Order#456126562</h6>
              <span>View Order Details </span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Status</h5>
          <p class="card-text">
            Your order will be refunded within two working days, if your request
            is not successful.
          </p>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <img
                  src={require("../Images/card2.jpg")}
                  class="img-fluid"
                  width={250}
                  height={200}
                  alt="..."
                />
              </div>
              <div className="col-6">
                <b>Product Name</b>
                <p>Description</p>
                <p>Size</p>
                <button className="btn btn-primary">Buy Again</button>
              </div>
              <div className="col-3">color</div>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-dark">Archive order</small>
          </div>
        </div>
      </div>
    </>
  );
}
