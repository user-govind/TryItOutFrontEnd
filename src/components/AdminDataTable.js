import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductsDataTable() {
  const [products, setProducts] = useState([]);

  let getAllProducts = async () => {
    let productsList = (
      await axios.post("http://localhost:8080/all-products", {})
    ).data;
    setProducts(productsList);

    console.log(products);
  };

  useEffect(async () => {
    getAllProducts();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.productId,
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={"https://" + row.productImg}
          alt={row.category}
          height={80}
          width={80}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Descripition",
      selector: (row) => row.description,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
  ];

  return <DataTable />;
}
