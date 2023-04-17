import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function Office() {
  // use effect about

  const [Office, setOffice] = useState([]);
  //   console.log(getAboutdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/about-fe`, {
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
      setOffice(data);
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

              {Office.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-12 col-md-12 col-lg-12 office">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="sub-paragraph">
                              <h3 className="text-center"> OFFICE </h3>
                              <article
                                id="post-5833"
                                className="post-5833 page type-page status-publish has-post-thumbnail hentry"
                              >
                                <div className="entry-content">
                                  <h4>{item.short_des}</h4>

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
