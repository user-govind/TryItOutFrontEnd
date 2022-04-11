import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";
import UpdateProducsAdmin from "../components/UpdateProducsAdmin";

export default function AdminUpdateProdus() {
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
      <NavbarTryItOut></NavbarTryItOut>
      <UpdateProducsAdmin></UpdateProducsAdmin>
      <Footer></Footer>
    </>
  );
}
