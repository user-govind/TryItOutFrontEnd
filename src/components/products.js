// import axios from "axios";
// import { useState, useEffect } from "react";

// import React from "react";

// export function ProductsFunc() {
//   console.log("hee");
//   useEffect(async () => {
//     let url = "http://localhost:8080/get-all-cartProducts/" + 3;

//     let res = await axios.post(url, {});
//     console.log(res.data);
//     Products = res.data;
//   }, []);
//   return <div>products</div>;
// }
export const Products = [
  {
    id: 1,
    title: "Samsung S21",
    description: "black in color",
    price: "2500",
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quantity: 1,
  },
];
