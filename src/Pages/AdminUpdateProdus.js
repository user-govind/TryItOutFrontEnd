import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpdateProducsAdmin from "../components/UpdateProducsAdmin";

export default function AdminUpdateProdus() {
  let navigate = useNavigate();
  useEffect(() => {
    let userPresent = JSON.parse(sessionStorage.getItem("UserId"));
    console.log(userPresent);
    if (userPresent == null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <UpdateProducsAdmin></UpdateProducsAdmin>
      <Footer></Footer>
    </>
  );
}
