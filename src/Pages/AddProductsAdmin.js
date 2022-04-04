import React from "react";
import Adminadd from "../components/AdminAddProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AddProductsAdmin() {
  return (
    <>
      <Navbar></Navbar>
      <Adminadd></Adminadd>
      <Footer></Footer>
    </>
  );
}
