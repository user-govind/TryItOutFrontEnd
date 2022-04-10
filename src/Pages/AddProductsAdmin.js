import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Adminadd from "../components/AdminAddProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AddProductsAdmin() {
  let navigate = useNavigate();
  useEffect(() => {
    let userPresent = JSON.parse(sessionStorage.getItem("UserId"));
    let userRole = JSON.parse(sessionStorage.getItem("RoleId"));
    console.log(userPresent);
    if (userPresent == null || userRole != 0) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Adminadd></Adminadd>
      <Footer></Footer>
    </>
  );
}
