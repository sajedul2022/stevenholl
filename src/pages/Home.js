import React from "react";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <>
      

      <div className="fullscreenslider">
        <Carousel variant="light">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div
        className="bgcommanSec m-hero"
        style={{
          backgroundImage: `url("assets/images/uploads/1.jpg")`,
          // backgroundColor: "#2f4966",
        }}
      >
        
      </div>
      
    </>
  );
}
