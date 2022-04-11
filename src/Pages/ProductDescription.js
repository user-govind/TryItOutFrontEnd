import React from "react";
import Displaycard from "../components/Displaycard";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";
import OneProduct from "../components/OneProduct";
import { useState } from "react";

export default function ProductDescription() {
  return (
    <div>
      <NavbarTryItOut></NavbarTryItOut>
      <OneProduct></OneProduct>
      <Displaycard></Displaycard>
      <Footer></Footer>
    </div>
  );
}
