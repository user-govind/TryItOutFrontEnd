// import { Search, ShoppingCart } from "@material-ui/icons";
// import { Badge } from "@material-ui/core";
// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   height: 60px;
// `;
// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;
// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
// `;

// const Input = styled.input`
//   border: none;
//   text-align: center;
// `;
// const Navbar = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>EN</Language>
//           <SearchContainer>
//             <Input />
//             <Search style={{ color: "gray", fontSize: 16 }} />
//           </SearchContainer>
//         </Left>
//         <Center>
//           <Logo>TryItOut</Logo>
//         </Center>
//         <Right>
//           <MenuItem>SIGN IN</MenuItem>
//           <MenuItem>
//             <Badge badgeContent={4} color="primary">
//               <ShoppingCart />
//             </Badge>
//           </MenuItem>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Navbar;
import React from "react";
import { NoEncryption, Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useEffect } from "react";
import styled from "styled-components";
import { Form, FormControl, Button, Navbar } from "react-bootstrap";
import Img from "../Images/tryitouttranslogo.png";
import { NavBar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { fontSize, sizeHeight } from "@mui/system";
import "../stylesheets/file.css";
import { Avatar } from "@mui/material";
import { NorthEastTwoTone } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
  background-color: #b3d9ff;
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
const NavbarTryItOut = () => {
  return (
    <div className="row">
      <Container className="h-100">
        <Wrapper>
          <div className="col-3">
            <Left>
              <a href="/home">
                <img style={{ width: "54px", margin: "2px" }} src={Img}></img>
              </a>
              <a href="/home">
                <Logo style={{ textDecoration: "none" }}>
                  <Link className="" tag="a" to="/" action></Link>
                  TryItOut
                </Logo>
              </a>
            </Left>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-3">
              <Center>
                <Form className="d-flex" style={{ width: 500 }}>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Center>
            </div>

            <Right>
              <div className="col-6 row d-flex justify-content-center align-content-center">
                <div className="col-4"></div>
                <div className="col-4">
                  <MenuItem>
                    <Badge badgeContent={4} color="primary">
                      <ShoppingCart />
                    </Badge>
                  </MenuItem>
                </div>
                <div className="col-2">
                  {/* <Avatar src="../Images/arrow.png" /> */}
                  <Avatar alt="" src={require("../Images/cart.png")} />
                </div>
                <div className="col-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="primary-light"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/user-profile">
                        User Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="/your-orders">
                        User Orders
                      </Dropdown.Item>
                      <Dropdown.Item href="/">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Right>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default NavbarTryItOut;
