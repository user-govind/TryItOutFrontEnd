import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";

export default function CartPage() {
  return (
    <div>
      <NavbarTryItOut></NavbarTryItOut>
      <div className="cartBody carthtml">
        <Cart></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
}
