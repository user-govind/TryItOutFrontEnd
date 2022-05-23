import React from "react";
import ReactDOM from "react-dom";

import { useState, useEffect } from "react";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({});

  let navigate = useNavigate();

  useEffect(async () => {
    let url =
      "http://localhost:8080/user-profile-info/" +
      JSON.parse(sessionStorage.getItem("UserId"));

    let res = await axios.post(url, {});
    setUserInfo(res.data);
  }, []);

  const [file, setfile] = useState(null);

  const [feildStatus, setfeildStatus] = useState("disabled");
  const [feildStatusAdd, setfeildStatusAdd] = useState("disabled");

  console.log(userInfo);

  let updateUserProfile = (e) => {
    e.preventDefault();
    if (feildStatus == "disabled") {
      setfeildStatus("");
    } else {
      let body = {
        userId: userInfo.id,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        mobile: userInfo.mobile,
      };

      try {
        axios
          .post("http://localhost:8080/update-user-info", body)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              Swal.fire("Updated", "User updated succesfully", "success");
            } else {
              Swal.fire("Something went wrong", "try again", "error");
            }
          })
          .catch((error) => {
            Swal.fire("Something went wrong", "try again", "error");
          });
      } catch (e) {}

      setfeildStatus("disabled");
    }
  };

  let updateUserAddress = (e) => {
    e.preventDefault();
    if (feildStatusAdd == "disabled") {
      setfeildStatusAdd("");
    } else {
      let body = {
        addId: userInfo.addId,
        addLine1: userInfo.addressLine1,
        addLine2: userInfo.addressLine2,
        city: userInfo.city,
        postalCode: userInfo.postCode,
        country: userInfo.country,
        state: userInfo.state,
      };
      let res;
      console.log("body");
      console.log(body);
      try {
        axios
          .post("http://localhost:8080/update-user-address", body)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              Swal.fire("Updated", "Address updated succesfully", "success");
            } else {
              Swal.fire("Something went wrong", "try again", "error");
            }
          })
          .catch((error) => {
            Swal.fire("Something went wrong", "try again", "error");
          });
      } catch (e) {}

      setfeildStatusAdd("disabled");
    }
  };

  const onChangeUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container">
        <div className="row fb m-md-5 m-5">
          <div className="col-md-3 border-end">
            <div className="row mt-3">
              <div className="d-flex flex-column align-items-center text-center">
                <form>
                  <Photo className="image w-50" user={userInfo.userImg}></Photo>
                  {/* <img
                    className="image w-50"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  ></img> */}
                  <div class="font-weight-bold mt-4">
                    {userInfo.firstName + " " + userInfo.lastName}
                  </div>
                  <div class="text-black-50">{userInfo.email}</div>
                  <span>____________________ </span>
                </form>
              </div>
              <div className="mt-4 pt-2 d-flex justify-content-center">
                <input
                  className="btn btn-primary  "
                  type="button"
                  value="My Cart"
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
              </div>
              <div className="mt-4 pt-2 d-flex justify-content-center">
                <input
                  className="btn btn-primary btn "
                  type="button"
                  value="My Orders"
                  onClick={() => {
                    navigate("/your-orders");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-5 border-end ">
            <div className="card-body p-0 p-md-2">
              <h3 className="mb-0 pb-2 pb-md-0 mb-md-2 text-center">
                My Profile
              </h3>
              <form onSubmit={updateUserProfile}>
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
                        name="firstName"
                        className="form-control form-control-lg"
                        value={userInfo.firstName}
                        onChange={onChangeUserInfo}
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
                        name="lastName"
                        value={userInfo.lastName}
                        onChange={onChangeUserInfo}
                        className="form-control form-control-lg"
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
                        id="email"
                        name="email"
                        value={userInfo.email}
                        onChange={onChangeUserInfo}
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
                        name="mobile"
                        value={userInfo.mobile}
                        onChange={onChangeUserInfo}
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
                        for="country"
                        className="form-label  text-dark fs-6"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="country"
                        name="country"
                        value={userInfo.country}
                        onChange={onChangeUserInfo}
                        disabled={feildStatusAdd}
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
            <form onSubmit={updateUserAddress}>
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
                      id="Address Line 1"
                      name="addressLine1"
                      value={userInfo.addressLine1}
                      onChange={onChangeUserInfo}
                      disabled={feildStatusAdd}
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
                      id="Address Line 2"
                      name="addressLine2"
                      value={userInfo.addressLine2}
                      onChange={onChangeUserInfo}
                      disabled={feildStatusAdd}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <label for="PIN" className="form-label text-dark fs-6">
                      PIN
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="pin"
                      name="postCode"
                      value={userInfo.postCode}
                      onChange={onChangeUserInfo}
                      disabled={feildStatusAdd}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <label for="City" className="form-label text-dark fs-6">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="city"
                      value={userInfo.city}
                      onChange={onChangeUserInfo}
                      disabled={feildStatusAdd}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <label for="state" className="form-label text-dark fs-6">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="form-control form-control-lg"
                      name="state"
                      value={userInfo.state}
                      onChange={onChangeUserInfo}
                      disabled={feildStatusAdd}
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

function Photo({ user }) {
  if (user == undefined || user == null || user == "") {
    console.log(user);
    user = "defalutUserImg.png";
    console.log("Control reached here");
    console.log(user);
    // user.userImg = "defalutUserImg.png";
  }
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      let userId = JSON.parse(sessionStorage.getItem("UserId"));
      const formdata = new FormData();

      formdata.append("id", userId);
      formdata.append("profilePic", file);
      let url = "http://localhost:8080/upload-profilepic";
      let status = await axios.post(url, formdata);
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
          src={require("../User-ProfilePics/" + user)}
        />
      </div>
      Click on Image to <br /> change or upload image
    </div>
  );
}
