import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";
import ProfilePage from "../components/ProfilePage";

export default function UserProfile() {
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
    <>
      <NavbarTryItOut></NavbarTryItOut>
      <ProfilePage></ProfilePage>
      <Footer></Footer>
    </>
  );
}
