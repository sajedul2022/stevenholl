import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function PeopleCat() {
  // People cat
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/p-cat`, {
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

  // click event

  const handleClick = async (id) => {
    try {
      const response = await fetch(`${API_PATH}/cat_people/${id}`);
      // const response = fetch(`https://inspace.bdprogrammers.com/admin/api/cat_project/${id}`);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [users, setData] = useState([]);
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
                {getuserdata.map((element, id) => {
                  return (
                    <>
                      <li key={id} item={element} id="menu-item-5915">
                        {/* <Link  to={`/construction-projects/${element.id}`} >
                                {element.name}
                              </Link> */}

                        <button onClick={() => handleClick(element.id)}>
                          {element.name}
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8 ">
            <div className="body-content">
              <div className="row">
               

                {users.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-3 col-md-3 col-lg-3  project-item ">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="img-wrap">
                              {/* <Link to={`/single-project/${item.id}`}> */}
                              <Link>
                                <img
                                  src={`${MAIN_PATH}/images/${item.image}`}
                                  alt={item.name}
                                />
                              </Link>
                            </div>

                            <div className="titleSec">
                              <h2>
                                <Link>{item.name}</Link>
                              </h2>
                              <p>{item.description}</p>
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
