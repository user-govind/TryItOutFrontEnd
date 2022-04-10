import React from "react";
import AdminUsersList from "../components/AdminUsersList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AdminUserListPage() {
  return (
    <>
      <Navbar></Navbar>
      <AdminUsersList></AdminUsersList>
      <Footer></Footer>
    </>
  );
}
