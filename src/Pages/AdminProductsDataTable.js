import React, { useEffect } from "react";
import ProductsDataTable from "../components/AdminDataTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
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
      <AdminNavbar />
      <ProductsDataTable></ProductsDataTable>
      <Footer></Footer>
    </>
  );
}
