import React from "react";
import "../stylesheets/OneProduct.css";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { Markup } from "interweave";
import { mobile } from "../components/responsive";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function OneProduct({ product, setproduct }) {
  let navigate = useNavigate();

  var [product, setproduct] = useState({});

  const [quantity, setquantity] = useState(1);

  const [color, setcolor] = useState("Red");

  const [size, setsize] = useState("L");

  useEffect(() => {
    let products = JSON.parse(sessionStorage.getItem("productId"));
    setproduct(products);
  }, []);

  let amount;
  if (product.price != null || quantity != null)
    amount = product.price * quantity;

  let AddProductToCart = async () => {
    let url = "http://localhost:8080/add-product-cart";
    let body = {
      productid: product.productId,
      quantity: quantity,
      userid: JSON.parse(sessionStorage.getItem("UserId")),
      colour: color,
      size: size,
      status: "Pending",
    };

    try {
      let res = await axios.post(url, body);
      if (res.data) {
        Swal.fire({
          icon: "success",
          title: "Added to Cart :)",
          text: "Please buy early we need money!!",
        });
        navigate("/cart");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Do it the write way",
        text: "Try again!! Product is not added :(",
      });
    }
  };

  let payNow = async (e) => {
    e.preventDefault();

    if (amount == "")
      Swal.fire("Enter Valid Amount", "Total mount is not valid", "question");
    else {
      sessionStorage.setItem("size", JSON.stringify(size));
      sessionStorage.setItem("quantity", quantity);
      sessionStorage.setItem("amount", amount);
      sessionStorage.setItem("colour", JSON.stringify(color));
      sessionStorage.setItem("productBuyId", product.productId);
      navigate("/address-form");
    }
  };

  <Markup content={product.description} />;
  let description = product.description;

  const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-evenly;
  `;
  // ${mobile({ width: "100%" })}

  const Filter = styled.div`
    display: flex;
    align-items: center;
  `;

  const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
  `;

  const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
  `;

  const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
  `;

  const FilterSizeOption = styled.option``;

  return (
    <div className="d-flex container my-5 ">
      <div>
        <img
          className="productImg"
          src={"http://" + product.productImg}
          alt=""
        />
      </div>
      <div className="mx-5">
        <p className="text-primary">Brand : {product.brand}</p>
        <h2> {product.name} </h2>
        <div className="fs-3">
          Rating : <span className="text-primary">5</span>
        </div>
        <div className="fs-3">
          Price :<span className="text-danger">$ {product.price}</span>{" "}
        </div>
        <div>color : {product.colour}</div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div>Status : In stock</div>
        <label htmlFor="" className="fs-3 text-black">
          Qunatity :
        </label>
        <input
          className="border-2 mx-3"
          type="number"
          value={quantity}
          onChange={(e) => {
            setquantity(e.target.value);
          }}
          required
        />
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor
              onClick={() => {
                setcolor("Red");
                console.log(color);
              }}
              color="Red"
            />
            <FilterColor
              onClick={() => {
                setcolor("Yellow");
                console.log(color);
              }}
              color="Yellow"
            />
            <FilterColor
              onClick={() => {
                setcolor("Pink");
                console.log(color);
              }}
              color="Pink"
            />
          </Filter>
          <Filter
            onClick={(e) => {
              setsize(e.target.value);
            }}
          >
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>

        <div className="my-5 d-flex justify-content-evenly justify-content-between ">
          <button
            className="btn btn-lg btn-warning"
            onClick={() => {
              navigate("/tryon");
            }}
          >
            Try On
          </button>
          <button className="btn btn-lg btn-warning" onClick={AddProductToCart}>
            Add to cart
          </button>
        </div>
        <button className="btn btn-lg btn-primary w-100" onClick={payNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
