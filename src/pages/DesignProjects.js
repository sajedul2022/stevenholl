import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DesignProjects() {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    // const res = await fetch("http://127.0.0.1:8000/api/design-cat", {
    const res = await fetch("http://inspace.polwel.com/admin/api/design-cat", {
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

  return (
    <>
      <div
        className="bgcommanSec fullscreenslider"
        style={{
          // backgroundImage: `url("assets/images/uploads/1.jpg")`,
          backgroundColor: "#0025db7d",
        }}
      ></div>

      <div className="paragraph-section">
        <div className="container">
          <div className="sub-paragraph">
            <h1>Design Projects</h1>
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
                              <Link to={`/design-cat/${element.id}`} > {element.name}  </Link>
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
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <div className="SelectedProjectsSec">
                      <div className="newbox sub-paragraph">
                        <div className="titleSec">
                          <h2>
                            <Link to="">
                              {/* NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF
                              FINE ARTS HOUSTON (MFAH) */}
                              {/* {element.name} */}
                            </Link>
                          </h2>
                        </div>
                        <div className="img-wrap">
                          <Link to="/single-project">
                            {/* <img
                              src={`http://127.0.0.1:8000/images/${element.image_01}`}
                              alt={element.name}
                            /> */}
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
    </>
  );
}
