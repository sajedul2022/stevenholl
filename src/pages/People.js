import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function People() {
  // People cat
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/p-cat`, {
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

  const [show, setShow] = React.useState();

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

  // ==============  People  fetch  =========================

  let params = useParams();

  const [getPeople, setPeople] = useState([]);
  console.log(getPeople);

  const getProjectdata = async (id) => {
    const result = await fetch(`${API_PATH}/people-fe`, {
      // const result = await fetch(`${API_PATH}/design-item/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const datas = await result.json();
    console.log(datas);

    if (result.status === 422 || !datas) {
      console.log("error ");
    } else {
      setPeople(datas);
      console.log("get datas22");
    }
  };

  useEffect(() => {
    getProjectdata(params.id);
  }, []);

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
            <div className="sub-menu ">
              <ul className="menu">
                {getuserdata.map((element, id) => {
                  return (
                    <>
                      <li
                        key={id}
                        item={element}
                        id="menu-item-5915"
                        className="people-menu"
                      >
                        
                        <li onClick={() => setShow(true)}>
                          <button onClick={() => handleClick(element.id)}>
                            {element.name}
                          </button>
                        </li>

                        {/* <button>
                          <Link to={`/people/${element.id}`}>
                            {element.name}
                          </Link>
                        </button> */}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8 single-people">
            <div className="body-content">
              <div className="row">
                {/* All  */}
                {getPeople.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-3 col-md-3 col-lg-3  project-item ">
                        <div className={`${show ? "hidden" : ""}`}  >
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
