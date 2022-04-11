import React from "react";
import ProductsDataTable from "../components/AdminDataTable";
import NavbarTryItOut from "../components/NavbarTryItOut";
import Footer from "../components/Footer";
export default function AdminProductsDataTable() {
  return (
    <>
      <NavbarTryItOut></NavbarTryItOut>
      <ProductsDataTable></ProductsDataTable>
      <Footer></Footer>
    </>
  );
}
