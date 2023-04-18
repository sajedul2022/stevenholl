import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function Pratice() {
  // use effect
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/office-fe`, {
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
  const [toggle, setToggle] = useState(true);

  const handleClickAbout = async () => {
    setToggle(!toggle);
    try {
      const response = await fetch(`${API_PATH}/about-fe`);
      // const response = fetch(`https://inspace.bdprogrammers.com/admin/api/cat_project/${id}`);
      const data = await response.json();
      console.log(data);
      setabout(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [about, setabout] = useState([]);

  //   Office  click event

  const handleClickOffice = async () => {
    setToggle(!toggle);

    try {
      const response = await fetch(`${API_PATH}/office-fe`);
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
      const response = await fetch(`${API_PATH}/history-fe`);
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
          backgroundColor: "#0000004d",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="sub-menu">
              <ul className="menu pratice-menu">
                <li id="menu-item-5915">
                  <button>
                    <NavLink exact activeClassName="active" to="/about">
                      About
                    </NavLink>
                  </button>
                </li>

                <li id="menu-item-5915">
                  <button>
                    <NavLink activeClassName="active" to="/office">
                      Office
                    </NavLink>
                  </button>
                </li>

                <li id="menu-item-5915">
                  <button>
                    <NavLink activeClassName="active" to="/history">
                      History
                    </NavLink>
                  </button>
                </li>

                {/* <li>
                  <button onClick={() => handleClickAbout()}>ABOUT US</button>
                </li>

                <li>
                  <button onClick={() => handleClickOffice()}>OFFICE</button>
                </li>

                <li>
                  <button onClick={() => handleClickHistory()}>HISTORY</button>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="pratice-content">
              <div className="row">
                

                {getuserdata.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-12 col-md-12 col-lg-12 office">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="sub-paragraph">
                              <h3 className="text-center"> Office | About | History </h3>
                              <article
                                id="post-5833"
                                className="post-5833 page type-page status-publish has-post-thumbnail hentry"
                              >
                                <div className="entry-content">
                                  {/* <h4>{item.short_des}</h4> */}

                                  <p>{item.full_des}</p>
                                  <div className="img-wrap">
                                    <img
                                      src={`${MAIN_PATH}/images/${item.image}`}
                                      // src="http://127.0.0.1:8000/images/20230410072328.jpg"
                                      alt={item.short_des}
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

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
