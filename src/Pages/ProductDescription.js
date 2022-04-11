import React from "react";
import Displaycard from "../components/Displaycard";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";
import OneProduct from "../components/OneProduct";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductDescription() {
  let navigate = useNavigate();
  useEffect(() => {
    let userPresent = JSON.parse(sessionStorage.getItem("UserId"));
    let userRole = JSON.parse(sessionStorage.getItem("RoleId"));
    console.log(userPresent);
    if (userPresent == null || userRole != 1) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <NavbarTryItOut></NavbarTryItOut>
      <OneProduct></OneProduct>
      <Displaycard></Displaycard>
      <Footer></Footer>
    </div>
  );
}
