import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function ConstructionProjects() {
  // Works cat
  const [active, setActive] = useState(null);
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/w-cat`, {
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
  // const [isActive, setIsActive] = useState(false);

  // const handleClick2 = (event) => {
  //   setIsActive((current) => !current);
  // };

  const [show, setShow] = React.useState();

  const handleClick = async (id) => {
    try {
      const response = await fetch(`${API_PATH}/cat_project/${id}`);
      // const response = fetch(`https://inspace.bdprogrammers.com/admin/api/cat_project/${id}`);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [users, setData] = useState([]);

  // ==============  Project  fetch  =========================

  const [getProject, setProject] = useState([]);
  // console.log(getProject);

  const getProjectdata = async () => {
    const result = await fetch(`${API_PATH}/project-fe`, {
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
      setProject(datas);
      console.log("get datas22");
    }
  };

  useEffect(() => {
    getProjectdata();
  }, []);

  // Use Effect

  // const [data, setData2] = useState(null);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1`)
  //         const newData = await response.json()
  //         setData2(newData)
  //     };

  //     fetchData();
  // }, []);

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
              <ul className="menu">
                {getuserdata.map((element, id) => {
                  return (
                    <>
                      <li
                        key={id}
                        item={element}
                        id="menu-item-5915"
                        onClick={() => setActive(element)}
                        className={`${active == element && "menu-active"}`}
                      >
                        {/* <Link  to={`/construction-projects/${element.id}`} >
                                {element.name}
                              </Link> */}

                        <li onClick={() => setShow(true)}>
                          <button onClick={() => handleClick(element.id)}>
                            {element.name}
                          </button>
                        </li>
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
                {/* id click */}

                {users.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-3 col-md-3 col-lg-3  project-item ">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="img-wrap">
                              <Link to={`/single-project/${item.id}`}>
                                <img
                                  src={`${MAIN_PATH}/images/${item.image_01}`}
                                  alt={item.name}
                                />
                              </Link>
                            </div>

                            <div className="titleSec">
                              <h2>
                                <Link to={`/single-project/${item.id}`}>
                                  {item.name}
                                </Link>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {/* All  */}
                {getProject.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-3 col-md-3 col-lg-3 project-item">
                        <div className={`${show ? "hidden" : ""}`}  >
                          <div key={(ids = 1)} item={item} className="">
                            <div className="img-wrap">
                              <Link to={`/single-project/${item.id}`}>
                                <img
                                  src={`${MAIN_PATH}/images/${item.image_01}`}
                                  alt={item.name}
                                />
                              </Link>
                            </div>

                            <div className="titleSec">
                              <h2>
                                <Link to={`/single-project/${item.id}`}>
                                  {item.name}
                                </Link>
                              </h2>
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
