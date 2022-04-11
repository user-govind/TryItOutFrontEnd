import React, { useContext } from "react";
import { CartContext } from "./Cart";
import axios from "axios";

const Items = ({ id, description, title, img, price, quantity }) => {
  //const {} = useContext(CartContext);

  const removeItem = () => {
    let body = {
      userCartId: JSON.parse(sessionStorage.getItem("CartID")),
      productId: JSON.parse(sessionStorage.getItem("ProductID")),
    };
    axios
      .put(`http://localhost:8080/delete-UserProduct`, body)
      .then((response) => {
        console.log("product deleted");
      });
  };
  const increment = () => {
    let body = {
      userCartId: JSON.parse(sessionStorage.getItem("CartID")),
      quantity: JSON.parse(sessionStorage.getItem("ProductQuantity")),
    };
    axios
      .put(`http://localhost:8080/plus-UserProduct`, body)
      .then((response) => {
        console.log("increased by 1");
      });
  };

  const decrement = () => {
    let body = {
      userCartId: JSON.parse(sessionStorage.getItem("CartID")),
      quantity: JSON.parse(sessionStorage.getItem("ProductQuantity")),
    };
    axios
      .put(`http://localhost:8080/minus-UserProduct`, body)
      .then((response) => {
        console.log("decreased by 1");
      });
  };
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
