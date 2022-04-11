import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import Arrow from "../Images/arrow.png";
import axios from "axios";

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
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
