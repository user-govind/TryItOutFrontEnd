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

import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Form, FormControl, Button } from "react-bootstrap";
import Img from "../Images/tryitouttranslogo.png";

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
const Navbar = () => {
  return (
    <Container className="h-100">
      <Wrapper>
        <Left>
          <img style={{ width: "54px", margin: "2px" }} src={Img}></img>
          <Logo>TryItOut</Logo>
        </Left>
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
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
