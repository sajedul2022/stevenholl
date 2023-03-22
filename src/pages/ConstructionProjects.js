import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function ConstructionProjects() {
  return (
    <div className="constProject">
      {/* <div className="fullscreenslider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/4.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}

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
    </div>
  );
}
