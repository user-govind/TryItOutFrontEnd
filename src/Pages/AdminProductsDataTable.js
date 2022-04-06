import React from "react";
import ProductsDataTable from "../components/AdminDataTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function AdminProductsDataTable() {
  return (
    <>
      <Navbar></Navbar>
      <ProductsDataTable></ProductsDataTable>
      <Footer></Footer>
    </>
  );
}
