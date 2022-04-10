import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import axios from "axios";
import YoutubeSearchedForTwoToneIcon from "@mui/icons-material/YoutubeSearchedForTwoTone";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductsDataTable() {
  let navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [filterProducts, setfilterProducts] = useState([]);

  let getAllProducts = async () => {
    let productsList = (
      await axios.post("http://localhost:8080/all-products", {})
    ).data;
    setProducts(productsList);
    setfilterProducts(productsList);
  };
  let DeleteProduct = async (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        confirmDelet(e);
      }
    });
  };
  let confirmDelet = async (e) => {
    let url = "http://localhost:8080/delete-product/" + e.target.id;

    let status = await axios.put(url);
    if (status) {
      getAllProducts();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Mostly server Problem",
      });
    }
  };
  useEffect(async () => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const result = products.filter((product) => {
      return product.name.toLowerCase().match(search.toLowerCase());
    });
    setfilterProducts(result);
  }, [search]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.productId,
      width: "80px",
      sortable: true,
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
      width: "150px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "400px",
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
      sortable: true,
      width: "150px",
    },
    {
      name: "Descripition",
      selector: (row) => row.description,
      width: "500px",
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-primary w-100"
          onClick={() => {
            sessionStorage.setItem("UpdateProduct", JSON.stringify(row));
            navigate("/admin/update-products");
          }}
        >
          Edit
        </button>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-primary"
          id={row.productId}
          onClick={DeleteProduct}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <DataTable
      title="Products Available in Inventory"
      columns={columns}
      data={filterProducts}
      pagination
      fixedHeader
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
        <>
          <input
            type="text"
            placeholder="Search products"
            className="w-25 form-control"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </>
      }
    />
  );
}
