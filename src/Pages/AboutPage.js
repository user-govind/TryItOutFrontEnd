import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  let navigate = useNavigate();
  useEffect(() => {
    let userPresent = JSON.parse(sessionStorage.getItem("UserId"));
    let userRole = JSON.parse(sessionStorage.getItem("RoleId"));

    if (userPresent == null || userRole != 1) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </>
  );
}
