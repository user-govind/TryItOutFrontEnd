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
import CartPage from "./Pages/CartPage";
import UpdateProdcutsAdmin from "./Pages/UpdateProdcutsAdmin";
import OTPBox from "./components/OTPBox";
import RazorPay from "./components/RazorPay";
import AddressForm from "./components/AddressForm";
import UserProfile from "./Pages/UserProfile";
import OrderHistory from "./Pages/OrderHistory";
import AdminProductsDataTable from "./Pages/AdminProductsDataTable";
import AdminUpdateProdus from "./Pages/AdminUpdateProdus";
import AddressPage from "./Pages/AddressPage";
import AdminUserListPage from "./Pages/AdminUserListPage";
import Chat from "./components/Chat";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Chat></Chat>
        <div>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/otp" element={<Otpcheck />}></Route>
            <Route path="/Address-Form" element={<AddressPage />}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/product"
              element={<ProductDescription></ProductDescription>}
            ></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>

            <Route path="/otpbox" element={<OTPBox></OTPBox>}></Route>

            <Route
              path="/admin/add-product"
              element={<AddProductsAdmin></AddProductsAdmin>}
            ></Route>
            <Route
              path="/update-products"
              element={<UpdateProdcutsAdmin></UpdateProdcutsAdmin>}
            ></Route>

            <Route path="/add" element={<AddP></AddP>}></Route>
            <Route path="/tryon" element={<TryOn></TryOn>}></Route>
            <Route path="/payment" element={<RazorPay></RazorPay>}></Route>
            <Route
              path="/admin/update-Products"
              element={<AdminUpdateProdus />}
            ></Route>
            <Route
              path="/admin/allproducts"
              element={<AdminProductsDataTable></AdminProductsDataTable>}
            ></Route>
            <Route
              path="/admin/allUsers"
              element={<AdminUserListPage></AdminUserListPage>}
            ></Route>
            <Route
              path="/user-profile"
              element={<UserProfile></UserProfile>}
            ></Route>

            <Route path="/about-us" element={<AboutPage></AboutPage>}></Route>
            <Route
              path="/your-orders"
              element={<OrderHistory></OrderHistory>}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
