import React from "react";
import Deals from "../components/Deals";
import Displaycard from "../components/Displaycard";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="fluid-container">
      <Deals />
      <NavbarTryItOut />
      <Slider></Slider>
      <Displaycard></Displaycard>
      <Footer></Footer>
    </div>
  );
};

export default Home;
