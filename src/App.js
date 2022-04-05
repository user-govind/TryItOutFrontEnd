import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddP from "./components/addproducts";
import TryOn from "./components/TryOn";
import ProductDescription from "./Pages/ProductDescription";
import Otpcheck from "./components/otpcheck";
import AddProductsAdmin from "./Pages/AddProductsAdmin";
// import CartPage from "./Pages/CartPage";
import UpdateProdcutsAdmin from "./Pages/UpdateProdcutsAdmin";
import OTPBox from "./components/OTPBox";
import RazorPay from "./components/RazorPay";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/otp" element={<Otpcheck />}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/product"
              element={<ProductDescription></ProductDescription>}
            ></Route>
            {/* <Route path="/cart" element={<CartPage></CartPage>}></Route> */}

            <Route path="/otpbox" element={<OTPBox></OTPBox>}></Route>

            <Route
              path="/add-products"
              element={<AddProductsAdmin></AddProductsAdmin>}
            ></Route>
            <Route
              path="/update-products"
              element={<UpdateProdcutsAdmin></UpdateProdcutsAdmin>}
            ></Route>

            <Route path="/add" element={<AddP></AddP>}></Route>
            <Route path="/tryon" element={<TryOn></TryOn>}></Route>
            <Route path="/payment" element={<RazorPay></RazorPay>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
