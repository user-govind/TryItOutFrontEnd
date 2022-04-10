import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const OrderHistory = () => {
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
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};

export default OrderHistory;
