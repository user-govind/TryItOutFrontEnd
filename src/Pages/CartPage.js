import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CartPage() {
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
      <Navbar></Navbar>
      <div className="cartBody carthtml">
        <Cart></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
}
