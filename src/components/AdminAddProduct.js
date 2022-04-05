import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";
import axios from "axios";

function Adminadd() {
  const [productName, setproductName] = useState("");
  const [productprice, setproductprice] = useState("");
  const [productquantity, setproductquantity] = useState("");
  const [productstatus, setproductstatus] = useState("");
  const [productcategory, setproductcategory] = useState("");
  const [gender, setgender] = useState("");
  const [productcolor, setproductcolor] = useState("");
  const [productsize, setproductsize] = useState("");
  const [productbrand, setproductbrand] = useState("");

  const changeproductName = (event) => {
    setproductName(event.target.value);
  };

  const changeproductprice = (event) => {
    setproductprice(event.target.value);
  };

  const changeproductquantity = (event) => {
    setproductquantity(event.target.value);
  };
  const changeproductstatus = (event) => {
    setproductstatus(event.target.value);
  };

  const changeproductcategory = (event) => {
    setproductcategory(event.target.value);
  };

  const changegender = (event) => {
    setgender(event.target.value);
  };
  const changeproductcolor = (event) => {
    setproductcolor(event.target.value);
  };
  const changeproductsize = (event) => {
    setproductsize(event.target.value);
  };
  const changeproductbrand = (event) => {
    setproductbrand(event.target.value);
  };
  const transferValue = async () => {
    if (
      productName == "" ||
      productprice == "" ||
      productquantity == "" ||
      productstatus == "" ||
      productcategory == "" ||
      gender == "" ||
      productcolor == "" ||
      productsize == "" ||
      productbrand == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Try again",
      });
    } else {
      let product = {
        productName: productName,
        productprice: productprice,
        productquantity: productquantity,
        productstatus: productstatus,
        productcategory: productcategory,
        productsize: productsize,
        productcolor: productcolor,
        productbrand: productbrand,
      };
      let status = await axios.post(
        "http://localhost:8080/add-product",
        product
      );

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
    setproductstatus("");
    setproductcategory("");
    setproductquantity("");
    setproductsize("");
    setproductcolor("");
    setproductbrand("");
  };

  return (
    <>
      <div className="container height-100 p-5 rounded my-5">
        <div className="row mb-5">
          <div className="col alert alert-primary fs-1 text-center">
            Add Admin products
          </div>
        </div>
        <div class="row justify-content-center">
          <div className="col-6">
            <form>
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product name"
                required
                value={productName}
                onChange={changeproductName}
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product price"
                value={productprice}
                onChange={changeproductprice}
                required
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product quantity"
                value={productquantity}
                onChange={changeproductquantity}
                required
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product status"
                value={productstatus}
                onChange={changeproductstatus}
                required
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product category"
                value={productcategory}
                onChange={changeproductcategory}
                required
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter gender"
                value={gender}
                onChange={changegender}
                required
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product color"
                value={productcolor}
                onChange={changeproductcolor}
                required
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product size"
                value={productsize}
                onChange={changeproductsize}
                required
              />
              <br />
              <input
                className="form-control form-control-lg fs-2"
                type="text"
                placeholder="enter product brand"
                value={productbrand}
                onChange={changeproductbrand}
                required
              />
              <br />
              <p>Click on the "Choose File" button to upload a file:</p>

              <form action="/action_page.php">
                <input type="file" id="myFile" name="filename"></input>
              </form>
              <br />
              <button type="submit">Addproduct</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Adminadd;
