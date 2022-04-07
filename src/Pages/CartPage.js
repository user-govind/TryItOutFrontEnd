import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CartPage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="cartBody carthtml">
        <Cart></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
}
