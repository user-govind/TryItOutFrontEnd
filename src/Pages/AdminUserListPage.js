import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminUsersList from "../components/AdminUsersList";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";

export default function AdminUserListPage() {
  let navigate = useNavigate();
  useEffect(() => {
    let userPresent = JSON.parse(sessionStorage.getItem("UserId"));
    let userRole = JSON.parse(sessionStorage.getItem("RoleId"));
    console.log(userPresent);
    if (userPresent == null || userRole == 0) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <NavbarTryItOut></NavbarTryItOut>
      <AdminUsersList></AdminUsersList>
      <Footer></Footer>
    </>
  );
}
