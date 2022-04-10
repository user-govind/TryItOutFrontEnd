import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function AdminUsersList() {
  const [userList, setUserList] = useState([]);

  const [search, setSearch] = useState("");

  const [filterUsers, setfilterUsers] = useState([]);

  useEffect(async () => {
    let res = await axios.post("http://localhost:8080/getUsers", {});
    setUserList(res.data);
    setfilterUsers(res.data);
  }, []);

  useEffect(() => {
    const result = userList.filter((user) => {
      return user.email.toLowerCase().match(search.toLowerCase());
    });
    setfilterUsers(result);
  }, [search]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.userId,
      width: "80px",
      sortable: true,
    },
    // {
    //   name: "Image",
    //   selector: (row) => (
    //     <img
    //       src={require("../User-ProfilePics/" + row.image)}
    //       alt={row.fristName}
    //       height={80}
    //       width={80}
    //     />
    //   ),
    //   width: "150px",
    // },
    {
      name: "Frist Name",
      selector: (row) => row.firstName,
      sortable: true,
      width: "400px",
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      width: "400px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "150px",
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobile,
      width: "200px",
    },
    {
      name: "Creation Time",
      selector: (row) => row.creationTimestamp,
      sortable: true,
    },
    {
      name: "Updation Time",
      selector: (row) => row.updationTimestamp,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
  ];

  return (
    <DataTable
      title="Users List"
      columns={columns}
      data={filterUsers}
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
