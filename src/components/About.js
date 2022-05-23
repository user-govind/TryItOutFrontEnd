import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import { Card } from "react-bootstrap";

function About() {
  return (
    <>
      <div
        className="alert-warning fs-1 fw-bold d-flex justify-content-center align-items-center"
        style={{ height: "20vh" }}
      >
        About us
      </div>

      <div className="bg-white" style={{ height: "30vh" }}>
        <h3 className="text-center fw-bold mt-5 ">Who We Are</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          dolores dolore ipsum iure libero, ratione repellat eaque dolorum optio
          aut? Earum, et aut amet corporis est vero dolor tempora
          praesentium.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Assumenda dolores dolore ipsum iure libero, ratione repellat eaque
          dolorum optio aut? Earum, et aut amet corporis est vero dolor tempora
          praesentium.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("../Images/govind.jpg")} />
              <Card.Body>
                <Card.Title>Govind</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("../Images/abhi.jpg")} />
              <Card.Body>
                <Card.Title>Abhijeet</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("../Images/ashish.jpg")} />
              <Card.Body>
                <Card.Title>Ashish</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-3">
            <Card className="mb-5" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../Images/shriya.jpg")}
                style={{ height: "40vh" }}
              />
              <Card.Body>
                <Card.Title>Shriya</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../Images/Akshay.jpg")}
                style={{ height: "40vh" }}
              />
              <Card.Body>
                <Card.Title>Akshay</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
