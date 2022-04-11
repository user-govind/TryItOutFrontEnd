import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddressForm from "../components/AddressForm";
import Footer from "../components/Footer";
import NavbarTryItOut from "../components/NavbarTryItOut";

export default function AddressPage() {
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
      <div className="container-fluid ">
        <div
          className="row justify-content-center align-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3"></div>
          <div className="col-6 h-75 p-5">
            <div className="card h-100">
              <div className="card-body ">
                <AddressForm></AddressForm>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
