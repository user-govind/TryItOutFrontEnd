import React from "react";
import { Carousel } from "react-bootstrap";


export default function Carousell() {
  return (
    <>
    <div>
      
    <div className="row  ">
          <div className="col ">
            <Carousel>
            <Carousel.Item>
                <img
                  className="d-block w-100 car"
                  src={require("../Images/firstc.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car"
                  src={require("../Images/1c.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car"
                  src={require("../Images/2c.jpg")}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car"
                  src={require("../Images/3c.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car"
                  src={require("../Images/4c.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car"
                  src={require("../Images/5c.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
  
</div>
    </>
  );
}
