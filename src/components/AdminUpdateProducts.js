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

  let navigate = useNavigate();

  let loadProducts = async () => {
    let products = (await axios.post("http://localhost:8080/all-products", {}))
      .data;
    setproductList(products);
  };

  useEffect(async () => {
    loadProducts();
  }, []);

  let DeleteProduct = async (e) => {
    console.log(e.target.id);
    let url = "http://localhost:8080/delete-product/" + e.target.id;

    let status = await axios.put(url);
    if (status) {
      alert("deleted");
      loadProducts();
    }
  };

  return (
    <div className="mx-5 my-4">
      <div className="alert alert-secondary">
        <Row xs={1} md={2} className="g-4 m-0 p-0">
          {productList.map((item, index) => (
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
                  <div className="d-flex justify-content-evenly">
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
                    </Button>
                  </div>
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
