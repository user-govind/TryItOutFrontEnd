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
                  className="d-block w-100 caro"
                  src={require("../Images/1carous.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img

                  className="d-block w-100 caro"
                  src={require("../Images/2carous.jpg")}

                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img

                  className="d-block w-100 caro"
                  src={require("../Images/3carous.jpg")}

                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img

                  className="d-block w-100 caro"
                  src={require("../Images/4carous.jpg")}

                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img

                  className="d-block w-100 caro"
                  src={require("../Images/5carous.jpg")}

                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img

                  className="d-block w-100 caro"
                  src={require("../Images/6carous.jpg")}

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
