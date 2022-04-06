import React, { useState, Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import "../stylesheets/AdminAdd.css";
import { lightBlue } from "@material-ui/core/colors";
import { NavDropdown } from "react-bootstrap";

function Adminadd() {
  const [productName, setproductName] = useState("");
  const [productprice, setproductprice] = useState("");
  const [productquantity, setproductquantity] = useState();

  const [productcategory, setproductcategory] = useState("");
  const [gender, setgender] = useState("");
  const [productcolor, setproductcolor] = useState("");
  const [productbrand, setproductbrand] = useState("");
  const [productDescriptiion, setproductDescriptiion] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const changeproductName = (event) => {
    setproductName(event.target.value);
  };

  const changeproductDescription = (e) => {
    setproductDescriptiion(e.target.value);
  };

  const changeproductprice = (event) => {
    setproductprice(event.target.value);
  };

  const changeproductquantity = (event) => {
    setproductquantity(event.target.value);
  };

  const changeproductcategory = (event) => {
    alert(event.target.value);

    setproductcategory(event.target.value);
  };

  const changegender = (event) => {
    alert(event.target.value);
    setgender(event.target.value);
  };
  const changeproductcolor = (event) => {
    setproductcolor(event.target.value);
  };
  const changeproductbrand = (event) => {
    setproductbrand(event.target.value);
  };
  const transferValue = async (e) => {
    e.preventDefault();
    console.log(productName);
    if (
      productName == "" ||
      productprice == "" ||
      productquantity == "" ||
      productcategory == "" ||
      gender == "" ||
      productcolor == "" ||
      productbrand == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Try again",
      });
    } else {
      // let product = {
      //   Name: productName,
      //   price: productprice,
      //   quantity: productquantity,
      //   status: productstatus,
      //   category: productcategory,
      //   colour: productcolor,
      //   brand: productbrand,
      //   gender: gender,
      // };

      let product = new FormData();

      product.append("Name", productName);
      product.append("price", productprice);
      product.append("quantity", productquantity);
      product.append("Description", productDescriptiion);
      product.append("category", productcategory);
      product.append("colour", productcolor);
      product.append("brand", productbrand);
      product.append("gender", gender);
      product.append("productImg", selectedFile);
      let status;
      try {
        status = await axios.post("http://localhost:8080/add-product", product);
      } catch (e) {
        status = false;
      }

      if (status) {
        Swal.fire({
          icon: "success",
          title: "product Added!!!",
          text: "You have been successfully added product",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Try again",
          text: "product Not Added!!!",
        });
      }
    }
    setproductName("");
    setproductprice("");

    setproductcategory("");
    setproductquantity("");
    setproductcolor("");
    setproductbrand("");
  };
  let getfile = (e) => {
    console.log(e.target.value);
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <div class="container justify-content-center f1">
        <div class="card " style={{ width: "80vw" }}>
          <div class="card-body">
            <div
              className="container  height-100 p-5 rounded"
              style={{
                width: "80vw",
                backgroundColor: "rgba(0,0,255,0.1)",
              }}
            >
              <div className="row mb-5">
                <div
                  className="col   fs-2 text-center"
                  style={{ color: "blue" }}
                >
                  Add Admin products
                </div>
              </div>
              <div class="row justify-content-center">
                <div className="col-6">
                  <form onSubmit={transferValue} id="productForm">
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product name:</label>
                      <input
                        type="text"
                        id="pname"
                        name="pname"
                        placeholder="Enter product name"
                        required
                        value={productName}
                        onChange={changeproductName}
                      ></input>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product Description:</label>
                      {/* <input
                        type="textarea"
                        id="pname"
                        name="pname"
                        placeholder="Enter product name"
                        required
                        value={productName}
                        onChange={changeproductName}
                      ></input> */}
                      <textarea
                        rows="4"
                        cols="25"
                        name="comment"
                        form="productForm"
                        onChange={changeproductDescription}
                        value={productDescriptiion}
                        placeholder="Enter Product Description..."
                      ></textarea>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product colour:</label>
                      <input
                        type="text"
                        id="pcolour"
                        name="pcolour"
                        placeholder="Enter product colour"
                        required
                        value={productcolor}
                        onChange={changeproductcolor}
                      ></input>
                    </div>

                    <br />
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product price:</label>
                      <input
                        type="number"
                        id="pname"
                        name="pname"
                        placeholder="Enter product price"
                        required
                        value={productprice}
                        onChange={changeproductprice}
                      ></input>
                    </div>

                    <br />

                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product Quantity:</label>
                      <input
                        type="number"
                        id="pquantity"
                        name="pquantity"
                        placeholder="Enter product Quantity"
                        required
                        value={productquantity}
                        onChange={changeproductquantity}
                      ></input>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Gender:</label>
                      <div className="d-flex" onChange={changegender}>
                        <div className="form-check me-4">
                          <input
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="Male"
                          ></input>
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                        <br />
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            value="Female"
                          ></input>
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pcategory">Product category:</label>
                      <select
                        className="form-select"
                        style={{ width: "200px" }}
                        value={productcategory}
                        onChange={changeproductcategory}
                      >
                        <option selected>Categories</option>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Shirt">Shirt</option>
                        <option value="Jacket">Jacket</option>
                        <option value="Jacket">Coat</option>
                        <option value="shorts">shorts</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Sweater">Sweater</option>
                        <option value="Jerkin">Jerkin</option>
                        <option value="Swimsuit">Swimsuit</option>
                        <option value="Tracksuit">Tracksuit</option>
                      </select>
                    </div>
                    <br />

                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product Brand:</label>
                      <input
                        type="text"
                        id="pbrand"
                        name="pbrand"
                        placeholder="Enter product brand"
                        required
                        value={productbrand}
                        onChange={changeproductbrand}
                      ></input>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between mb-5">
                      <label for="filename"></label>
                      <input
                        type="file"
                        id="productfile"
                        name="filename"
                        onChange={getfile}
                      ></input>
                    </div>
                    <br />
                    <input
                      type="submit"
                      value="Add"
                      className="btn btn-primary text-center"
                    />
                  </form>
                </div>
              </div>
            </div>
            .0
          </div>
        </div>
      </div>
    </>
  );
}
export default Adminadd;
