import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const OrderHistory = () => {
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
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};

export default OrderHistory;
