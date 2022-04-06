import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfilePage from "../components/ProfilePage";

export default function UserProfile() {
  return (
    <>
      <Navbar></Navbar>
      <ProfilePage></ProfilePage>
      <Footer></Footer>
    </>
  );
}
