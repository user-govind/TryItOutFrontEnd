import React from "react";
import AddressForm from "../components/AddressForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AddressPage() {
  return (
    <>
      <Navbar></Navbar>
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
