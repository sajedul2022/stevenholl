import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";

export default function SingleProject() {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("http://inspace.polwel.com/admin/api/project-fe", {
    // const res = await fetch("http://127.0.0.1:8000/api/project-fe", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div
        className="bgcommanSec"
        style={{
          // backgroundImage: `url("assets/images/uploads/6.jpg")`,
          backgroundColor: "#2f4966",
        }}
      ></div>

      <div className="paragraph-section">
        <div className="row">
          {getuserdata.map((element, id) => {
            return (
              <>
                <div className="col-sm-5 col-md-5 col-lg-5">
                  <div>
                    <div className="sub-paragraph">
                      <div className="title_module">
                        <h1>{element.name}</h1>
                      </div>
                    </div>
                    <br />
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Description</Accordion.Header>
                        <Accordion.Body>{element.description}</Accordion.Body>
                      </Accordion.Item>

                      {/* <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Ecological Innovation
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item> */}

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Videos</Accordion.Header>
                        <Accordion.Body>
                          Watch Videos
                          <iframe
                            width="560"
                            height="315"
                            src={element.video}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Credits</Accordion.Header>
                        <Accordion.Body>{element.credits}</Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Quotes</Accordion.Header>
                        <Accordion.Body>{element.quotes}</Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5">
                        <Accordion.Header>News</Accordion.Header>
                        <Accordion.Body>{element.news}</Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="6">
                        <Accordion.Header>Awards</Accordion.Header>
                        <Accordion.Body>{element.awards}</Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item>
                        <Accordion.Header>
                          <Link to={element.link}>More Relevant Works</Link>
                        </Accordion.Header>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>

                <div className=" col-sm-6 col-md-6 col-lg-6">
                  <div className="sub-paragraph"> Projects Images </div>
                  <div className="">
                    <Carousel variant="light">
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          // src="assets/images/uploads/4.jpg"
                          src={`http://127.0.0.1:8000/images/${element.image_01}`}
                          alt="First slide"
                        />
                        {/* <Carousel.Caption>
                          <h5>First slide label</h5>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                          </p>
                        </Carousel.Caption> */}
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          // src="assets/images/uploads/2.jpg"
                          src={`http://127.0.0.1:8000/images/${element.image_02}`}
                          alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                          <h5>Second slide label</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </Carousel.Caption> */}
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          // src="assets/images/uploads/3.jpg"
                          src={`http://127.0.0.1:8000/images/${element.image_03}`}
                          alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                          <h5>Third slide label</h5>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption> */}
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          // src="assets/images/uploads/3.jpg"
                          src={`http://127.0.0.1:8000/images/${element.image_04}`}
                          alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                          <h5>Third slide label</h5>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption> */}
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          // src="assets/images/uploads/3.jpg"
                          src={`http://127.0.0.1:8000/images/${element.image_05}`}
                          alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                          <h5>Third slide label</h5>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption> */}
                      </Carousel.Item>

                    </Carousel>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
