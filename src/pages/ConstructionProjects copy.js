import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function ConstructionProjects() {
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

  // click event

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

  let params = useParams();

  const [getProject, setProject] = useState([]);
  console.log(getProject);

  const getProjectdata = async (id) => {
    const result = await fetch(`${API_PATH}/project-fe`, {
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
      setProject(datas);
      console.log("get datas22");
    }
  };

  useEffect(() => {
    getProjectdata(params.id);
  }, []);


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
      const { pathname } = location;
  
  //Javascript split method to get the name of the path in array
      const splitLocation = pathname.split("/");

  // return

  return (
    <div className="constProject ">
      <div
        className="bgcommanSec fullscreenslider"
        style={{
          // backgroundImage: `url("assets/images/uploads/1.jpg")`,
          backgroundColor: "#2f4966",
        }}
      ></div>

      <div className="paragraph-section container">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="">
              <ul id="project-pagemenu" className="menu">
                {getuserdata.map((element, id) => {
                  return (
                    <>
                      <li 
                        key={id}
                        item={element}
                        id="menu-item-5915"
                        
                      >
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

          <div className="col-sm-8 col-md-8 col-lg-8 body-content">
            <div className="row">

              {/* All  */}

              {/* {getProject.map((item, ids) => {
                return (
                  <>
                    <div className="col-sm-3 col-md-3 col-lg-3 project-item">
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
              })} */}

              {users.map((item, ids) => {
                return (
                  <>
                    <div className="col-sm-3 col-md-3 col-lg-3 project-item">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
