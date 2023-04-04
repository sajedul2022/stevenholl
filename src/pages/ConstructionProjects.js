import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
      const response = await fetch(
        `http://127.0.0.1:8000/api/cat_project/${id}`
      );
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
  let navigate = useNavigate();

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

  return (
    <div className="constProject">
      <div
        className="bgcommanSec fullscreenslider"
        style={{
          // backgroundImage: `url("assets/images/uploads/1.jpg")`,
          backgroundColor: "#2f4966",
        }}
      ></div>

      <div className="paragraph-section">
        <div className="container">
          <div className="sub-paragraph">
            <h1>Construction Projects</h1>
          </div>

          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <header>
                <div className="sub-nav">
                  <div className="menu-project-page-menu-container">
                    <ul id="project-pagemenu" className="menu">
                      <li
                        id="menu-item-5906"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-5832 current_page_item menu-item-5906"
                      >
                        <a href="#" aria-current="page">
                          Selected Projects
                        </a>
                      </li>

                      {getuserdata.map((element, id) => {
                        return (
                          <>
                            <li
                              key={id}
                              item={element}
                              id="menu-item-5915"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
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
              </header>
            </div>

            <div className="col-sm-7 col-md-7 col-lg-7">
              {users.map((item, ids) => {
                return (
                  <>
                    <div className="SelectedProjectsSec">
                      <div
                        key={(ids = 1)}
                        item={item}
                        className="newbox sub-paragraph"
                      >
                        <div className="titleSec">
                          <h2>
                            <Link to={`/single-project/${item.id}`}>
                              {/* NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF
                              FINE ARTS HOUSTON (MFAH) */}
                              {item.name}
                            </Link>
                          </h2>
                        </div>
                        <div className="img-wrap">
                          <Link to={`/single-project/${item.id}`}>
                            <img
                              src={`${MAIN_PATH}/images/${item.image_01}`}
                              alt={item.name}
                            />
                          </Link>
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
