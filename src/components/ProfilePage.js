import React from "react";
import ReactDOM from "react-dom";

import { useState } from "react";
import NavbarTryItOut from "../components/NavbarTryItOut";
import Footer from "./Footer";
import { style } from "@mui/system";

export default function UserProfile() {
  return (
    <div>
      {/* <Navbar /> */}
      <ProfilePage></ProfilePage>
      <Footer></Footer>
    </div>
  );
}

function ProfilePage() {
  const [feildStatus, setfeildStatus] = useState("disabled");
  return (
    <div>
      <div className="container">
        <div className="row fb m-md-5 m-5">
          <div className="col-md-3 border-end">
            <div className="row mt-3">
              <div className="d-flex flex-column align-items-center text-center">
                <form>
                  <Photo className="image w-50"></Photo>
                  {/* <img
                    className="image w-50"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  ></img> */}
                  <div class="font-weight-bold mt-4">Govind</div>
                  <div class="text-black-50">govind.k@gmail.com</div>
                  <span>____________________ </span>
                </form>
              </div>
              <div className="mt-4 pt-2 d-flex justify-content-center">
                <input
                  className="btn btn-primary  "
                  type="button"
                  value="My Cart"
                />
              </div>
              <div className="mt-4 pt-2 d-flex justify-content-center">
                <input
                  className="btn btn-primary btn "
                  type="button"
                  value="My Orders"
                />
              </div>
            </div>
          </div>

          <div className="col-md-5 border-end ">
            <div className="card-body p-0 p-md-2">
              <h3 className="mb-0 pb-2 pb-md-0 mb-md-2 text-center">
                My Profile
              </h3>
              <form>
                <div className="row ">
                  <div className="col-md-6 mb-4 ">
                    <div className="form-outline ">
                      <label
                        className="form-label text-dark fs-6"
                        for="firstName"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control form-control-lg"
                        value="Govind"
                        disabled={feildStatus}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label
                        className="form-label  text-dark fs-6"
                        for="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control form-control-lg"
                        disabled={feildStatus}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100 ">
                      <label
                        for="birthdayDate"
                        className="form-label  text-dark fs-6"
                      >
                        Birth Date
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="birthdayDate"
                        disabled={feildStatus}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label
                        for="Email-Id"
                        className="form-label  text-dark fs-6"
                      >
                        Email-Id
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="birthdayDate"
                        disabled
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label
                        for=" Mobile No"
                        className="form-label text-dark fs-6"
                      >
                        Mobile No
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="Mobile No"
                        disabled
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2 d-flex justify-content-center">
                  <input
                    className="btn btn-primary btn "
                    type="submit"
                    value="Update profile"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mt-2">
              <h4 className="d-flex justify-content-center">Address</h4>
            </div>
            <form>
              <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <label
                      for="Address Line 1"
                      className="form-label text-dark fs-6"
                    >
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="birthdayDate"
                      disabled
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <label
                      for="Address Line 2"
                      className="form-label text-dark fs-6"
                    >
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="birthdayDate"
                      disabled
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <label for="PIN" className="form-label text-dark fs-6">
                      PIN
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="birthdayDate"
                      disabled
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <label
                      for="Additional Details"
                      className="form-label text-dark fs-6"
                    >
                      Additional Details
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="birthdayDate"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2 d-flex justify-content-center">
                <input
                  className="btn btn-primary btn "
                  type="submit"
                  value="Update Address"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Photo() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
        }}
      />
      <div
        style={{
          height: "200px",
          width: "200px",
          border: "1px dashed black",
          borderRadius: "50%",
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "acsolute",
            borderRadius: "50%",
          }}
        />
      </div>
      Click to upload Image
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Photo />, rootElement);
