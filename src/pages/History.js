import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function History() {
  // use effect about

  const [History, setHistory] = useState([]);
  //   console.log(getAboutdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/history-fe`, {
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
      setHistory(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

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
              </ul>
            </div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="pratice-content">
              <div className="row">

              {History.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-4 col-md-4 col-lg-4 history ">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="img-wrap">
                              <img
                                src={`${MAIN_PATH}/images/${item.image}`}
                                // src="http://127.0.0.1:8000/images/20230410072328.jpg"
                                alt={item.title}
                              />
                            </div>
                            <br />

                            <div className="titleSec">
                              <h2>{item.year}</h2>
                            </div>

                            <div className="titleSec">
                              <b>
                                <h2>{item.title}</h2>
                              </b>
                            </div>

                            <p>{item.full_des}</p>
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
