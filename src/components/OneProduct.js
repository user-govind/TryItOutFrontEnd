import React from "react";
import "../stylesheets/OneProduct.css";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { Markup } from "interweave";
import { mobile } from "../components/responsive";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OneProduct({ product, setproduct }) {
  let navigate = useNavigate();

  var [product, setproduct] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0 });
    console.log("hello");
    let products = JSON.parse(sessionStorage.getItem("productId"));
    setproduct(products);
  }, []);

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
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
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
          <button className="btn btn-lg btn-warning">Try On</button>
          <button
            className="btn btn-lg btn-warning"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Add to cart
          </button>
        </div>
        <button
          className="btn btn-lg btn-primary w-100"
          onClick={() => {
            navigate("/payment");
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
