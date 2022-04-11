import React, { useEffect } from "react";
import ProductsDataTable from "../components/AdminDataTable";
import NavbarTryItOut from "../components/NavbarTryItOut";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
export default function AdminProductsDataTable() {
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
      <ProductsDataTable></ProductsDataTable>
      <Footer></Footer>
    </>
  );
}
