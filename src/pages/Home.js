import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_PATH}/basic-fe`)
      // fetch("https://inspace.bdprogrammers.com/admin/api/basic-fe")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      {items.map((element, id) => {
        return (
          <>
            {/* social  */}
            <div className="h-social">
              <ul className="social-icon">
                <li>
                  <Link to={element.facebook} target="_blank">
                    <img src="/assets/images/facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to={element.instagram} target="_blank">
                    <img src="/assets/images/instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to={element.youtube} target="_blank">
                    <img src="/assets/images/youtube.svg" alt="" />
                  </Link>
                </li>

                <li>
                  <Link to={element.linkedin} target="_blank">
                    <img src="/assets/images/linkedin.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="fullscreenslider Home">
              <Carousel variant="light">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    // src="assets/images/uploads/1.jpg"
                    src={`${MAIN_PATH}/images/${element.image_01}`}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    // src="assets/images/uploads/2.jpg"
                    src={`${MAIN_PATH}/images/${element.image_02}`}
                    
                    alt="Second slide"
                  />
                  {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    // src="assets/images/uploads/3.jpg"
                    src={`${MAIN_PATH}/images/${element.image_03}`}
                    alt="Third slide"
                  />
                  {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </div>

            <div
              className="bgcommanSec m-hero"
              style={{
                backgroundImage: `url("assets/images/uploads/1.jpg")`,
                // backgroundColor: "#2f4966",
              }}
            ></div>
          </>
        );
      })}
    </>
  );
}
