import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate, useParams } from "react-router-dom";
import { API_PATH, MAIN_PATH } from "../API_PATH";

import { Player } from "video-react";

export default function SingleProject() {
  let params = useParams();
  let navigate = useNavigate();

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (id) => {
    const res = await fetch(`${API_PATH}/single_project/${id}`, {
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
    getdata(params.id);
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

      {getuserdata.map((element, id) => {
        return (
          <>
            <div className="fullscreenslider single-carousel-out ">
              <div className=" ">
                <div className="">
                  <Carousel variant="light">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        // src="assets/images/uploads/4.jpg"
                        src={`http://127.0.0.1:8000/images/${element.image_01}`}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        // src="assets/images/uploads/2.jpg"
                        src={`http://127.0.0.1:8000/images/${element.image_02}`}
                        alt="Second slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        // src="assets/images/uploads/3.jpg"
                        src={`http://127.0.0.1:8000/images/${element.image_03}`}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        // src="assets/images/uploads/3.jpg"
                        src={`http://127.0.0.1:8000/images/${element.image_04}`}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        // src="assets/images/uploads/3.jpg"
                        src={`http://127.0.0.1:8000/images/${element.image_05}`}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <div className="paragraph-section container single-project">
        <div className="row">
          {getuserdata.map((element, id) => {
            return (
              <>
                <div className="col-sm-5 col-md-5 col-lg-5">
                  <div>
                    <div className="sub-paragraph">
                      
                        
                      
                      <div className="title_module">
                      <h1> Project Title: {element.name} </h1>
                      <h1></h1>
                      </div>
                    </div>
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

                      {/* <Accordion.Item eventKey="2">
                        <Accordion.Header>Videos</Accordion.Header>
                        <Accordion.Body>
                          Watch Videos: 
                          <script>let video = {element.video}</script>
                          <Player
                            playsInline
                            poster="/assets/poster.png"
                            // src={element.video}
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                          />

                            <video width="100%" controls id="myvideo">
                              <source src={element.video} type="video/mp4"/>
                              Your browser does not support the video tag.
                            </video>

                        </Accordion.Body>
                      </Accordion.Item> */}

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

                <div className=" col-sm-7 col-md-7 col-lg-7 body-content">
                  {/* <div className="sub-paragraph"> 
                  Projects Images 
                  </div> */}
                  <div className="single-carousel-in">
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
