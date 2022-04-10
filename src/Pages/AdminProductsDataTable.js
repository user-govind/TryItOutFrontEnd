import React, { useEffect } from "react";
import ProductsDataTable from "../components/AdminDataTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
export default function AdminProductsDataTable() {
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
      <ProductsDataTable></ProductsDataTable>
      <Footer></Footer>
    </>
  );
}
