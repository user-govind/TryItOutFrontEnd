import React, { useState } from "react";
import { NoEncryption, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useEffect } from "react";
import styled from "styled-components";
import { Form, FormControl, Button } from "react-bootstrap";
import Img from "../Images/tryitouttranslogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { fontSize, sizeHeight } from "@mui/system";
import { Avatar } from "@mui/material";
import { NorthEastTwoTone } from "@mui/icons-material";
import { Windows } from "react-bootstrap-icons";
import axios from "axios";
const Container = styled.div`
  height: 60px;
  background: #83a4d4;
  background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);
  background: linear-gradient(to right, #b6fbff, #83a4d4);
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
  text-align: center;
`;
const Navbar = () => {
  let navigate = useNavigate();

  const [searchValue, setsearchValue] = useState();

  let handlechange = (e) => {
    setsearchValue(e.target.value);
  };

  let propic = JSON.parse(sessionStorage.getItem("userProPic"));
  if (propic == null || propic == "") {
    propic = "defalutUserImg.png";
  }
  const [itemsQuantity, setitemsQuantity] = useState();
  useEffect(async () => {
    let res = await axios.get(
      "http://localhost:8080/getCartQuantity/" +
        JSON.parse(sessionStorage.getItem("CartId"))
    );
    if (res.data.status == "success") {
      console.log(res.data.quantity);
      setitemsQuantity(res.data.quantity);
    }
    console.log(res.data);
  }, []);

  return (
    <div className="row">
      <Container className="h-100">
        <Wrapper>
          <div className="col-3">
            <Left>
              <img
                style={{ width: "54px", margin: "2px" }}
                src={Img}
                onClick={() => {
                  navigate("/home");
                }}
              ></img>
              <Logo>
                <Link
                  className=""
                  tag="a"
                  to="/home"
                  style={{ textDecoration: "none" }}
                  action
                ></Link>
                TryItOut
              </Logo>
            </Left>
          </div>
          <div className="d-flex col-5 justify-content-between align-items-center text-center w-75">
            <div className="col-3">
              <Center className="">
                <Form style={{ width: 1000 }}>
                  <div className="d-flex " style={{ flex: "display" }}>
                    <div className="me-3 w-50">
                      <FormControl
                        type="search"
                        value={searchValue}
                        onChange={handlechange}
                        className="me-2"
                      ></FormControl>
                    </div>
                    <div>
                      <Button
                        type="button"
                        onClick={() => {
                          sessionStorage.setItem(
                            "Search",
                            JSON.stringify(searchValue)
                          );
                          navigate("/update-products");
                          window.location.reload();
                        }}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </Form>
              </Center>
            </div>

            <div className="col-4 row d-flex justify-content-center align-content-center">
              <div className="col-4"></div>
              <div className="col-4">
                <MenuItem>
                  <Badge badgeContent={itemsQuantity} color="primary">
                    <ShoppingCart
                      onClick={() => {
                        navigate("/cart");
                      }}
                    />
                  </Badge>
                </MenuItem>
              </div>
              <div className="col-2">
                {/* <Avatar src="../Images/arrow.png" /> */}
                <Avatar
                  alt=""
                  src={require("../User-ProfilePics/" + propic)}
                  onClick={() => {
                    navigate("/user-profile");
                  }}
                />
              </div>
              <div className="col-2">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="primary-light"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        navigate("/user-profile");
                      }}
                    >
                      User Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        navigate("/your-orders");
                      }}
                    >
                      User Orders
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        navigate("/about-us");
                      }}
                    >
                      About us
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};
export default Navbar;
