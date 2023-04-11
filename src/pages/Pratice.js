import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function Pratice() {
  // cat design
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/const-cat`, {
      // const res = await fetch("https://inspace.bdprogrammers.com/admin/api/const-cat", {
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

  // About click event
  const handleClickAbout = async () => {
    setToggle(!toggle);
    try {
      const response = await fetch(`${API_PATH}/project-fe`);
      // const response = fetch(`https://inspace.bdprogrammers.com/admin/api/cat_project/${id}`);
      const data = await response.json();
      console.log(data);
      setabout(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [about, setabout] = useState([]);
  const [toggle, setToggle] = useState(true);

  //   Office  click event

  const handleClickOffice = async () => {
    setToggle(!toggle);

    try {
      const response = await fetch(`${API_PATH}/news-fe`);
      // const response = fetch(`https://inspace.bdprogrammers.com/admin/api/cat_project/${id}`);
      const data = await response.json();
      console.log(data);
      setOffice(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [Office, setOffice] = useState([]);

  //   History  click event

  const handleClickHistory = async () => {
    setToggle(!toggle);
    try {
      const response = await fetch(`${API_PATH}/const-cat`);
      // const response = fetch(`https://inspace.bdprogrammers.com/admin/api/cat_project/${id}`);
      const data = await response.json();
      console.log(data);
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [History, setHistory] = useState([]);

  // return

  return (
    <>
      <div
        className="bgcommanSec fullscreenslider"
        style={{
          // backgroundImage: `url("assets/images/uploads/1.jpg")`,
          backgroundColor: "#0025db7d",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="sub-menu">
              <ul className="menu">
                <li>
                  <button onClick={() => handleClickAbout()}>ABOUT US</button>
                </li>

                <li>
                  <button onClick={() => handleClickOffice()}>OFFICE</button>
                </li>

                <li>
                  <button onClick={() => handleClickHistory()}>HISTORY</button>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-sm-8 col-md-8 col-lg-8"
            style={{ display: toggle ? "block" : "none" }}
          >
            <div className="pratice-content">
              <div className="row">
                {about.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-12 col-md-12 col-lg-12 about">
                        {/* <div key={(ids = 1)} item={item} className=""> */}

                        <div className="sub-paragraph">
                          <article
                            id="post-5833"
                            className="post-5833 page type-page status-publish has-post-thumbnail hentry"
                          >
                            <div className="entry-content">
                              <h4>
                                Focused on sustainability, human well-being, and
                                adaptability sustainability.
                              </h4>

                              

                              <p>
                                human well-being, and adaptability. Human
                                well-being, and adaptabilityhuman well-being,
                                and adaptability. Human well-being, and
                                adaptabilityhuman well-being, and adaptability.
                                Human well-being, and adaptability
                              </p>

                              <div className="img-wrap">
                                <img
                                  //   src={`${MAIN_PATH}/images/${item.image_01}`}
                                  src="http://127.0.0.1:8000/images/20230410072328.jpg"
                                  alt={item.name}
                                />
                              </div>
                              <hr />
                            </div>
                          </article>
                        </div>

                        {/* </div> */}
                      </div>
                    </>
                  );
                })}

                {Office.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-12 col-md-12 col-lg-12 office">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="sub-paragraph">
                              <article
                                id="post-5833"
                                className="post-5833 page type-page status-publish has-post-thumbnail hentry"
                              >
                                <div className="entry-content">
                                  <h4>
                                    Focused on sustainability, human well-being,
                                    and adaptability sustainability.
                                  </h4>

                                  <p>
                                    human well-being, and adaptability. Human
                                    well-being, and adaptabilityhuman
                                    well-being, and adaptability. Human
                                    well-being, and adaptabilityhuman
                                    well-being, and adaptability. Human
                                    well-being, and adaptability
                                  </p>
                                  <div className="img-wrap">
                                    <img
                                      //   src={`${MAIN_PATH}/images/${item.image_01}`}
                                      src="http://127.0.0.1:8000/images/20230410072328.jpg"
                                      alt={item.name}
                                    />
                                  </div>
                                  <hr />
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {History.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-3 col-md-3 col-lg-3 history ">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="img-wrap">
                              <img
                                //   src={`${MAIN_PATH}/images/${item.image_01}`}
                                src="http://127.0.0.1:8000/images/20230410072328.jpg"
                                alt={item.name}
                              />
                            </div>
                            <br />

                            <div className="titleSec">
                              <h2>2022</h2>
                            </div>

                            <div className="titleSec">
                              <b>
                                {" "}
                                <h2>{item.name}</h2>{" "}
                              </b>
                            </div>

                            <p>
                              Today's architecture is focused on sustainability,
                              human well-being, and adaptability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
