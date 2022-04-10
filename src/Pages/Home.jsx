import React from "react";
import Deals from "../components/Deals";
import Displaycard from "../components/Displaycard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    <div className="fluid-container">
      <Deals />
      <Navbar />
      <Slider></Slider>
      <Displaycard></Displaycard>
      <Footer></Footer>
    </div>
  );
};

export default Home;
