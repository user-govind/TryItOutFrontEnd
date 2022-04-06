import React from "react";
import { useState } from "react";

export default function ProfilePage() {
  const [feildStatus, setfeildStatus] = useState("disabled");

  return (
    <div>
      <div className="container">
        <div className="row fb m-md-5 m-5">
          <div className="col-md-3 border-end">
            <div className="row mt-3">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  className="image w-50"
                  onClick={() => {}}
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                ></img>
                <span class="font-weight-bold">Govind</span>
                <span class="text-black-50">govind.k@gmail.com</span>
                <span>____________________ </span>
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

          <div className="col-md-5 border-end">
            <div className="card-body p-0 p-md-2">
              <h3 className="mb-0 pb-2 pb-md-0 mb-md-2 text-center">
                My Profile
              </h3>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control form-control-lg"
                        value="Govind"
                        disabled={feildStatus}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="lastName">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control form-control-lg"
                        disabled={feildStatus}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label for="birthdayDate" className="form-label">
                        Birth Date
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="birthdayDate"
                        disabled={feildStatus}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label for="birthdayDate" className="form-label">
                        Email-Id
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
                <div className="row">
                  <div className="col-md-12 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label for="birthdayDate" className="form-label">
                        Mobile No
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
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mt-2">
              <h4 className="d-flex justify-content-center">Address</h4>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4 d-flex align-items-center">
                <div className="form-outline datepicker w-100">
                  <label for="birthdayDate" className="form-label">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="birthdayDate"
                    disabled={feildStatus}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4 d-flex align-items-center">
                <div className="form-outline datepicker w-100">
                  <label for="birthdayDate" className="form-label">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="birthdayDate"
                    disabled={feildStatus}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mb-4 d-flex align-items-center">
                <div className="form-outline datepicker w-100">
                  <label for="birthdayDate" className="form-label">
                    PIN
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="birthdayDate"
                    disabled={feildStatus}
                  />
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-12 mb-4 d-flex justify-content-center align-items-center">
                <div className="form-outline datepicker w-100">
                  <label for="birthdayDate" className="form-label">
                    Addition Details
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-center"
                    id="birthdayDate"
                    disabled={feildStatus}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-2 d-flex justify-content-center">
        <input
          className="btn btn-primary btn "
          type="submit"
          value="Update Details"
        />
      </div>
    </div>
  );
}
