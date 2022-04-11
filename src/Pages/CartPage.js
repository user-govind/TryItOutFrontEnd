import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";

export default function CartPage() {
  let navigate = useNavigate();
  useEffect(() => {
    let userPresent = JSON.parse(sessionStorage.getItem("UserId"));
    let userRole = JSON.parse(sessionStorage.getItem("RoleId"));

    if (userPresent == null || userRole != 1) {
      navigate("/");
    }
  }, []);
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
