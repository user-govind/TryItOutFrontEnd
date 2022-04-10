import React, { useEffect } from "react";
import Displaycard from "../components/Displaycard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OneProduct from "../components/OneProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductDescription() {
  let navigate = useNavigate();
  useEffect(() => {
    let userPresent = JSON.parse(sessionStorage.getItem("UserId"));
    console.log(userPresent);
    if (userPresent == null) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <OneProduct></OneProduct>
      <Displaycard></Displaycard>
      <Footer></Footer>
    </div>
  );
}
