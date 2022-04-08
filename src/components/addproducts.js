import React from "react";
import axios from "axios";

let arr = [];
let k = 0;
export default function AddP() {
  let productObj = {
    description: "",
    name: "",
    price: 0.0,
    productImg: "",
    quantity: 0,

    category: "",
    gender: "",
    colour: "",
    brand: "",
  };

  const callthis = () => {
    var options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "5229",
        limit: "48",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        "X-RapidAPI-Key": "39f8f04835msha89819f84249cf8p1fb440jsn0603052c692f",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);

        productObj.category = response.data.categoryName;

        // console.log(response.data.products.length);

        let myset = new Set();

        let j = 45;

        for (let i = 10; i <= 14; i++) {
          // console.log("hello");
          productObj.name = response.data.products[i].name;
          productObj.brand = response.data.products[i].brandName;
          productObj.productImg = response.data.products[i].imageUrl;
          productObj.price = response.data.products[i].price.current.value;
          let pid = response.data.products[i].id;
          // console.log("bye");
          if (!myset.has(productObj.brand)) {
            myset.add(productObj.brand);
            console.log(myset);
            arr[k++] = i;
            console.log(arr);
            getProductdetails(pid, productObj);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const getProductdetails = (pid, productObj) => {
    var options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {
        id: pid,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        "X-RapidAPI-Key": "39f8f04835msha89819f84249cf8p1fb440jsn0603052c692f",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);

        productObj.gender = response.data.gender;
        productObj.description = response.data.description;
        productObj.colour = response.data.variants[0].colour;

        productObj.quantity = 10000;

        postProduct(productObj);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  let postProduct = (productObj) => {
    let url = "http://localhost:8080/add";

    axios
      .post(url, productObj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>addproducts</h1>
      <button onClick={callthis}>featch products</button>
      <button onClick={postProduct}>push products</button>
    </div>
  );
}
