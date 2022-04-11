import React from "react";

import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";
import ProfilePage from "../components/ProfilePage";

export default function UserProfile() {
  return (
    <>
      <NavbarTryItOut></NavbarTryItOut>
      <ProfilePage></ProfilePage>
      <Footer></Footer>
    </>
  );
}
