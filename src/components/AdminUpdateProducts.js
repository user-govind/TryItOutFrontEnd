import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function AdminUpdate() {
  const [productList, setproductList] = useState([]);

  const [filterProductList, setfilterProductList] = useState([]);
  useEffect(async () => {
    let products = (await axios.post("http://localhost:8080/all-products", {}))
      .data;
    setproductList(products);
    setfilterProductList(products);
  }, []);

  useEffect(() => {
    if (productList != null || productList != undefined) filterproducts();
  }, [filterProductList]);

  let navigate = useNavigate();

  let [search, setsearch] = useState();

  let filterproducts = () => {
    let searchval = JSON.parse(sessionStorage.getItem("Search"));
    console.log(searchval);
    console.log(productList);

    let words = searchval.split(" ");
    console.log(words);
    let result1, result2, result3;
    let concatres;
    words.forEach((element) => {
      if (element.toLowerCase() == "for" || element.toLowerCase() == "and") {
        return;
      }

      result1 = productList.filter((product) => {
        return product.gender.toLowerCase().startsWith(element.toLowerCase());
      });

      result2 = productList.filter((product) => {
        return product.name.toLowerCase().match(element.toLowerCase());
      });

      result3 = productList.filter((product) => {
        return product.category.toLowerCase().match(element.toLowerCase());
      });

      console.log(result1);
      concatres = result1.concat(result2).concat(result3);
    });
    let resSet = new Set();
    let finalArr = [];

    concatres.forEach((element) => {
      if (!resSet.has(element)) {
        finalArr.push(element);
        console.log("prit thsi");
      } else {
        resSet.add(element);
      }
    });
    console.log("final arr" + finalArr);
    setfilterProductList(finalArr);

    console.log(filterProductList);
  };

  let DeleteProduct = async (e) => {
    console.log(e.target.id);
    let url = "http://localhost:8080/delete-product/" + e.target.id;

    let status = await axios.put(url);
    if (status) {
      alert("deleted");
    }
  };

  return (
    <div className="mx-5 my-4">
      <div className="alert alert-secondary">
        <Row xs={1} md={2} className="g-4 m-0 p-0">
          {filterProductList.map((item, index) => (
            <Col className="col col-md-3 my-3" style={{ maxHeight: "700px" }}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  className="m-0"
                  src={"https://" + item.productImg}
                  alt={item.category}
                />
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    {item.brand}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {item.name}
                    <div className="fw-bold text-danger">
                      {"$ " + item.price}
                    </div>
                  </Card.Text>
                  {/* <div className="d-flex justify-content-evenly">
                    <Button
                      className="btn w-100 mx-2"
                      onClick={() => {
                        navigate("/add-products");
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn w-100 mx-2"
                      id={item.productId}
                      onClick={DeleteProduct}
                    >
                      Delete
                    </Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default AdminUpdate;
