import axios from "axios";
import { useState, useEffect } from "react";

export const [products, setproducts] = useState([]);

useEffect(async () => {
  let url = "http://localhost:8080/get-all-cartProducts/" + 3;

  let res = await axios.post(url, {});
  console.log(res.data);
  setproducts(res.data);
}, []);
