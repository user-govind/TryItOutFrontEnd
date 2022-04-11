import React, { createContext, useReducer, useEffect } from "react";
import "../stylesheets/cart.css";
// import { Products } from "./products";
import { useState } from "react";
import axios from "axios";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import Swal from "sweetalert2";

export const CartContext = createContext();

const Cart = () => {
  const [Products, setProducts] = useState([]);

  useEffect(async () => {
    let url =
      "http://localhost:8080/get-all-cartProducts/" +
      JSON.parse(sessionStorage.getItem("CartId"));

    let res = await axios.post(url, {});

    setProducts(res.data);
  }, []);

  const [products, setproducts] = useState([]);
  Products.map(
    (item, index) =>
      (products[index] = {
        id: item.productId,
        title: item.brand,
        description: item.name,
        img: "http://" + item.productImg,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        colour: item.colour,
      })
  );

  const initialState = {
    item: products,
    totalAmount: 3698,
    totalItem: 45,
  };

  let baseUrl = "http://localhost:8080/";

  let body = {
    userCartId: JSON.parse(sessionStorage.getItem("CartId")),
    quantity: 0,
    productId: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = async (id) => {
    body.productId = id;
    let res = await axios.put(baseUrl + "delete-UserProduct/", body);

    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "Product removed :)",
        text: "Product is removed from cart",
      });
    } else {
      Swal.fire({
        icon: "error",
        icon: "error",
        title: "Something went wrong",
        text: "Try again!!",
      });
    }
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = async () => {
    let res = await axios.put(
      baseUrl + "clear-cart/" + JSON.parse(sessionStorage.getItem("CartId"))
    );
    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "Cart Celared :)",
        text: "Add fresh products to cart",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Try again!!",
      });
    }

    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = async (id, quantity) => {
    body.productId = id;
    body.quantity = quantity;
    let res = await axios.put(baseUrl + "plus-UserProduct", body);

    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = async (id, quantity) => {
    body.productId = id;
    body.quantity = quantity;
    let res = await axios.put(baseUrl + "minus-UserProduct", body);

    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item, state.totalAmount]);
  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
