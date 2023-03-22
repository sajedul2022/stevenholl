import React from "react";
import { Link } from "react-router-dom";

export default function DesignProjects() {
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
                      <li
                        id="menu-item-5915"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
                      >
                        <Link to="/museums">Museums</Link>
                      </li>
                      <li
                        id="menu-item-5917"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
                      >
                        <a href="#">Performing Arts</a>
                      </li>

                      <li
                        id="menu-item-5915"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
                      >
                        <a href="#">House</a>
                      </li>
                      <li
                        id="menu-item-5917"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
                      >
                        <a href="#">Performing Arts</a>
                      </li>
                      <li
                        id="menu-item-5915"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
                      >
                        <a href="#">Clubs</a>
                      </li>
                      <li
                        id="menu-item-5917"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
                      >
                        <a href="#"> Arts</a>
                      </li>
                      <li
                        id="menu-item-5915"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
                      >
                        <a href="#">Hall Room</a>
                      </li>
                      <li
                        id="menu-item-5917"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
                      >
                        <a href="#">Performing Arts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
            </div>

            <div className="col-sm-7 col-md-7 col-lg-7">
              <div className="SelectedProjectsSec">
                <div className="newbox sub-paragraph">
                  <div className="titleSec">
                    <h2>
                      <Link to="/single-project">
                        NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE
                        ARTS HOUSTON (MFAH)
                      </Link>
                    </h2>
                  </div>
                  <div className="img-wrap">
                    <Link to="/single-project">
                      <img
                        src="assets/images/uploads/3.jpg"
                        alt="NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS HOUSTON (MFAH)"
                      />
                    </Link>
                  </div>
                </div>

                <div className="newbox sub-paragraph">
                  <div className="titleSec">
                    <h2>
                      <Link to="/single-project">
                        RUBENSTEIN COMMONS, INSTITUTE FOR ADVANCED STUDY
                      </Link>
                    </h2>
                  </div>
                  <div className="img-wrap">
                    <Link to="/single-project">
                      <img
                        src="assets/images/uploads/2.jpg"
                        alt="RUBENSTEIN COMMONS, INSTITUTE FOR ADVANCED STUDY"
                      />
                    </Link>
                  </div>
                </div>

                <div className="newbox sub-paragraph">
                  <div className="titleSec">
                    <h2>
                      <Link to="/single-project">
                        &#8216;Z&#8217; Space Interior Design
                      </Link>
                    </h2>
                  </div>
                  <div className="img-wrap">
                    <Link to="/single-project">
                      <img
                        src="assets/images/uploads/2.jpg"
                        alt="&#8216;Z&#8217; Space"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
