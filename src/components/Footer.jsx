import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <div className="container-fluid text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>TryItOut.com
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Shirts
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dresses
                </a>
              </p>

              <p>
                <a href="#!" className="text-reset">
                  Jackets
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
              <p>
                <a href="#!" className="text-reset">
                  FaceBook
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Twitter
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Mumbai, 400001, IN
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@tryitout.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 091 234 567 88 33
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 022 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#">
          TryItOut.com
        </a>
      </div>
    </MDBFooter>
  );
}
